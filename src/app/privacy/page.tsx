import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Privacy Policy | Rulebook",
  description: "Privacy Policy for Rulebook - Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface-secondary pt-24 md:pt-28">
        <div className="container-landing py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-black text-4xl uppercase mb-2">Privacy Policy</h1>
            <p className="text-content-secondary mb-8">Last updated: December 2024</p>

            <div className="bg-white border-3 border-black shadow-brutalist-md p-8 space-y-8">
              <section>
                <h2 className="font-black text-xl uppercase mb-4">Overview</h2>
                <p className="text-content-secondary leading-relaxed">
                  Rulebook (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you use our mobile application.
                </p>
              </section>

              <section>
                <h2 className="font-black text-xl uppercase mb-4">Information We Collect</h2>

                <h3 className="font-bold text-lg mb-2">Photos</h3>
                <p className="text-content-secondary leading-relaxed mb-4">
                  When you scan a game box, we send the photo to our servers for AI processing. Photos are processed in real-time and are not permanently stored on our servers after analysis is complete.
                </p>

                <h3 className="font-bold text-lg mb-2">Device Information</h3>
                <p className="text-content-secondary leading-relaxed mb-4">
                  We collect anonymous device identifiers for analytics purposes only. This helps us understand app usage and improve performance.
                </p>

                <h3 className="font-bold text-lg mb-2">Purchase History</h3>
                <p className="text-content-secondary leading-relaxed">
                  Purchase transactions are handled by Apple App Store and Google Play Store. We receive confirmation of purchases but do not store your payment information.
                </p>
              </section>

              <section>
                <h2 className="font-black text-xl uppercase mb-4">Information We Do NOT Collect</h2>
                <ul className="list-disc list-inside text-content-secondary space-y-2">
                  <li>Personal identification information (name, email, phone)</li>
                  <li>Location data</li>
                  <li>Contact information</li>
                  <li>Browsing history</li>
                </ul>
              </section>

              <section>
                <h2 className="font-black text-xl uppercase mb-4">Local Data Storage</h2>
                <p className="text-content-secondary leading-relaxed">
                  Game rules you save are stored locally on your device. Your credit balance is also stored locally. This data remains on your device and is not synced to our servers.
                </p>
              </section>

              <section>
                <h2 className="font-black text-xl uppercase mb-4">Analytics</h2>
                <p className="text-content-secondary leading-relaxed">
                  We use privacy-friendly analytics to understand how users interact with our app. This data is anonymized and aggregated. We do not track individual users or sell data to third parties.
                </p>
              </section>

              <section>
                <h2 className="font-black text-xl uppercase mb-4">Data Security</h2>
                <p className="text-content-secondary leading-relaxed">
                  All communication between the app and our servers uses HTTPS encryption. We implement industry-standard security measures to protect your data.
                </p>
              </section>

              <section>
                <h2 className="font-black text-xl uppercase mb-4">Your Rights</h2>
                <p className="text-content-secondary leading-relaxed">
                  You can clear all local app data at any time through the Settings menu. Since we don&apos;t collect personal information, there is no account data to delete from our servers.
                </p>
              </section>

              <section>
                <h2 className="font-black text-xl uppercase mb-4">Contact Us</h2>
                <p className="text-content-secondary leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@rulebook.app" className="text-brutalist-orange underline">
                    privacy@rulebook.app
                  </a>
                </p>
              </section>

              <section>
                <h2 className="font-black text-xl uppercase mb-4">Changes to This Policy</h2>
                <p className="text-content-secondary leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
