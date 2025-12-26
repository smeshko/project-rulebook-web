import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Support | Rulebook",
  description: "Get help with Rulebook - FAQs, contact information, and troubleshooting guides.",
};

const faqs = [
  {
    question: "How do I scan a game?",
    answer: "Tap the camera button on the main screen, point your camera at the game box, and tap the capture button. Make sure the game title is visible and the lighting is good for best results.",
  },
  {
    question: "Why wasn't my game recognized correctly?",
    answer: "AI recognition works best with clear photos of the game box front. If the AI confidence is low, you can manually enter the game name. Obscure or international editions may require manual entry.",
  },
  {
    question: "How do credits work?",
    answer: "You receive 3 free credits when you first install the app. Each successful scan uses 1 credit. Credits never expire and can be purchased in packs of 1, 3, or 10.",
  },
  {
    question: "Can I use the app offline?",
    answer: "You need an internet connection to scan new games (for AI processing). However, all previously saved games are available offline in your Library.",
  },
  {
    question: "How do I restore my purchases?",
    answer: "Go to Settings → Scan Credits → Restore Purchases. This will restore any credits you've purchased on the same App Store / Google Play account.",
  },
  {
    question: "The rules seem incorrect. What should I do?",
    answer: "AI-generated rules may occasionally have errors. For critical gameplay decisions, we recommend verifying with the official rulebook. You can report issues to help us improve.",
  },
  {
    question: "How do I delete a game from my library?",
    answer: "Long-press on any game card in your Library, then select 'Delete'. You'll be asked to confirm before the game is removed.",
  },
  {
    question: "Can I get a refund for credits?",
    answer: "Credits are non-refundable once purchased. For issues with purchases, please contact Apple App Store or Google Play support directly.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface-secondary pt-24 md:pt-28">
        <div className="container-landing py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-black text-4xl uppercase mb-2">Support</h1>
            <p className="text-content-secondary mb-8">We&apos;re here to help you get the most out of Rulebook.</p>

            {/* Contact Card */}
            <div className="bg-brutalist-orange border-3 border-black shadow-brutalist-md p-6 mb-12">
              <h2 className="font-black text-xl uppercase mb-2">Need Help?</h2>
              <p className="mb-4">
                Can&apos;t find what you&apos;re looking for? Reach out to our support team.
              </p>
              <a
                href="mailto:support@rulebook.app"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-black uppercase tracking-wider border-3 border-black hover:bg-white hover:text-black transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Support
              </a>
              <p className="text-sm mt-3 opacity-75">
                We typically respond within 24-48 hours.
              </p>
            </div>

            {/* FAQs */}
            <h2 className="font-black text-2xl uppercase mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border-3 border-black shadow-brutalist-sm p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-content-secondary leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Additional Resources */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black shadow-brutalist-sm p-6">
                <h3 className="font-bold text-lg mb-2">Report a Bug</h3>
                <p className="text-content-secondary mb-4">
                  Found something not working right? Let us know so we can fix it.
                </p>
                <a
                  href="mailto:bugs@rulebook.app"
                  className="font-bold text-brutalist-orange underline"
                >
                  bugs@rulebook.app
                </a>
              </div>

              <div className="bg-white border-3 border-black shadow-brutalist-sm p-6">
                <h3 className="font-bold text-lg mb-2">Feature Request</h3>
                <p className="text-content-secondary mb-4">
                  Have an idea that would make Rulebook better? We&apos;d love to hear it.
                </p>
                <a
                  href="mailto:feedback@rulebook.app"
                  className="font-bold text-brutalist-orange underline"
                >
                  feedback@rulebook.app
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
