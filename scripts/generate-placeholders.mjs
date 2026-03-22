/**
 * Generate placeholder static assets for Meeple landing page.
 * Uses only Node.js built-ins (no external dependencies).
 *
 * Brand: #FF6B35 primary, #FFF9F0 background
 * Assets: favicon.ico, icon.svg, apple-touch-icon.png,
 *         og-image.png, twitter-card.png, icon-192.png, icon-512.png
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { deflateSync } from 'zlib';

const PUBLIC = join(import.meta.dirname, '..', 'public');

// Brand colors
const PRIMARY = [0xFF, 0x6B, 0x35]; // #FF6B35
const BG = [0xFF, 0xF9, 0xF0];     // #FFF9F0
const WHITE = [0xFF, 0xFF, 0xFF];

// ─── PNG Generation ───────────────────────────────────────────────

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xEDB88320 : 0);
    }
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function pngChunk(type, data) {
  const typeBytes = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const combined = Buffer.concat([typeBytes, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(combined));
  return Buffer.concat([len, combined, crc]);
}

function createPng(width, height, pixels) {
  // PNG signature
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 2;  // color type (RGB)
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  // IDAT - raw pixel data with filter bytes
  const rawData = Buffer.alloc(height * (1 + width * 3));
  for (let y = 0; y < height; y++) {
    rawData[y * (1 + width * 3)] = 0; // filter: none
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 3;
      const outIdx = y * (1 + width * 3) + 1 + x * 3;
      rawData[outIdx] = pixels[idx];
      rawData[outIdx + 1] = pixels[idx + 1];
      rawData[outIdx + 2] = pixels[idx + 2];
    }
  }
  const compressed = deflateSync(rawData);

  // IEND
  const iend = Buffer.alloc(0);

  return Buffer.concat([
    sig,
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', compressed),
    pngChunk('IEND', iend),
  ]);
}

// ─── Pixel Drawing Helpers ────────────────────────────────────────

function fillRect(pixels, w, x1, y1, x2, y2, color) {
  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      const idx = (y * w + x) * 3;
      pixels[idx] = color[0];
      pixels[idx + 1] = color[1];
      pixels[idx + 2] = color[2];
    }
  }
}

// Simple "M" letter bitmap (7x9 grid, scaled)
const M_BITMAP = [
  [1,0,0,0,0,0,1],
  [1,1,0,0,0,1,1],
  [1,0,1,0,1,0,1],
  [1,0,0,1,0,0,1],
  [1,0,0,0,0,0,1],
  [1,0,0,0,0,0,1],
  [1,0,0,0,0,0,1],
  [1,0,0,0,0,0,1],
  [1,0,0,0,0,0,1],
];

function drawM(pixels, w, h, color, bgColor) {
  // Fill background
  fillRect(pixels, w, 0, 0, w, h, bgColor);

  const bw = M_BITMAP[0].length;
  const bh = M_BITMAP.length;
  const scale = Math.floor(Math.min(w * 0.6 / bw, h * 0.6 / bh));
  const ox = Math.floor((w - bw * scale) / 2);
  const oy = Math.floor((h - bh * scale) / 2);

  for (let by = 0; by < bh; by++) {
    for (let bx = 0; bx < bw; bx++) {
      if (M_BITMAP[by][bx]) {
        fillRect(pixels, w, ox + bx * scale, oy + by * scale,
                 ox + (bx + 1) * scale, oy + (by + 1) * scale, color);
      }
    }
  }
}

function drawTextBanner(pixels, w, h) {
  // Orange background with centered "M" logo area
  fillRect(pixels, w, 0, 0, w, h, PRIMARY);

  // Draw a white rounded-ish rectangle in center
  const boxW = Math.floor(w * 0.3);
  const boxH = Math.floor(h * 0.6);
  const boxX = Math.floor((w - boxW) / 2);
  const boxY = Math.floor((h - boxH) / 2);
  fillRect(pixels, w, boxX, boxY, boxX + boxW, boxY + boxH, WHITE);

  // Draw M inside the white box
  const mW = Math.floor(boxW * 0.7);
  const mH = Math.floor(boxH * 0.7);
  const mPixels = new Uint8Array(mW * mH * 3);
  drawM(mPixels, mW, mH, PRIMARY, WHITE);

  // Copy M into main pixels
  const mX = boxX + Math.floor((boxW - mW) / 2);
  const mY = boxY + Math.floor((boxH - mH) / 2);
  for (let y = 0; y < mH; y++) {
    for (let x = 0; x < mW; x++) {
      const srcIdx = (y * mW + x) * 3;
      const dstIdx = ((mY + y) * w + (mX + x)) * 3;
      pixels[dstIdx] = mPixels[srcIdx];
      pixels[dstIdx + 1] = mPixels[srcIdx + 1];
      pixels[dstIdx + 2] = mPixels[srcIdx + 2];
    }
  }

  // Add "MEEPLE" text as simple pixel blocks below the box
  const textY = boxY + boxH + Math.floor(h * 0.05);
  const letterH = Math.floor(h * 0.04);
  const letterW = Math.floor(letterH * 0.7);
  const gap = Math.floor(letterW * 0.4);
  const text = "MEEPLE";
  const totalW = text.length * letterW + (text.length - 1) * gap;
  const startX = Math.floor((w - totalW) / 2);

  for (let i = 0; i < text.length; i++) {
    const lx = startX + i * (letterW + gap);
    fillRect(pixels, w, lx, textY, lx + letterW, textY + letterH, WHITE);
  }
}

// ─── ICO Generation ───────────────────────────────────────────────

function createIco(pngData) {
  // ICO format with embedded PNG
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);    // reserved
  header.writeUInt16LE(1, 2);    // ICO type
  header.writeUInt16LE(1, 4);    // 1 image

  const entry = Buffer.alloc(16);
  entry[0] = 32;  // width (32 = 32px, 0 = 256px)
  entry[1] = 32;  // height
  entry[2] = 0;   // color palette
  entry[3] = 0;   // reserved
  entry.writeUInt16LE(1, 4);     // color planes
  entry.writeUInt16LE(32, 6);    // bits per pixel
  entry.writeUInt32LE(pngData.length, 8);  // size
  entry.writeUInt32LE(22, 12);   // offset (6 + 16)

  return Buffer.concat([header, entry, pngData]);
}

// ─── Generate All Assets ─────────────────────────────────────────

console.log('Generating placeholder assets...');

// 1. icon.svg
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#FF6B35"/>
  <path d="M6 24V8l5 8 5-8 5 8 5-8v16" fill="none" stroke="#FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
writeFileSync(join(PUBLIC, 'icon.svg'), svg);
console.log('  ✓ icon.svg');

// 2. favicon.ico (32x32)
const fav32 = new Uint8Array(32 * 32 * 3);
drawM(fav32, 32, 32, WHITE, PRIMARY);
const fav32Png = createPng(32, 32, fav32);
writeFileSync(join(PUBLIC, 'favicon.ico'), createIco(fav32Png));
console.log('  ✓ favicon.ico');

// 3. apple-touch-icon.png (180x180)
const apple = new Uint8Array(180 * 180 * 3);
drawM(apple, 180, 180, WHITE, PRIMARY);
writeFileSync(join(PUBLIC, 'apple-touch-icon.png'), createPng(180, 180, apple));
console.log('  ✓ apple-touch-icon.png');

// 4. og-image.png (1200x630)
const og = new Uint8Array(1200 * 630 * 3);
drawTextBanner(og, 1200, 630);
writeFileSync(join(PUBLIC, 'og-image.png'), createPng(1200, 630, og));
console.log('  ✓ og-image.png');

// 5. twitter-card.png (1200x630)
// Same as OG image
writeFileSync(join(PUBLIC, 'twitter-card.png'), createPng(1200, 630, og));
console.log('  ✓ twitter-card.png');

// 6. icon-192.png (192x192)
const i192 = new Uint8Array(192 * 192 * 3);
drawM(i192, 192, 192, WHITE, PRIMARY);
writeFileSync(join(PUBLIC, 'icon-192.png'), createPng(192, 192, i192));
console.log('  ✓ icon-192.png');

// 7. icon-512.png (512x512)
const i512 = new Uint8Array(512 * 512 * 3);
drawM(i512, 512, 512, WHITE, PRIMARY);
writeFileSync(join(PUBLIC, 'icon-512.png'), createPng(512, 512, i512));
console.log('  ✓ icon-512.png');

console.log('\nAll placeholder assets generated in public/');
