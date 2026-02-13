import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Test Your World terms and conditions of service.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative bg-[var(--navy)] pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-[Outfit] text-white">Terms &amp; Conditions</h1>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[var(--gray-500)] leading-relaxed"><em>Last updated: February 2026</em></p>
          <p className="text-[var(--gray-600)] leading-relaxed mt-4">
            By accessing or using Test Your World (operated by BRS Lab Services), you agree to be bound by these Terms and Conditions.
          </p>
          <h2 className="text-xl font-[Outfit] font-bold mt-8 mb-3">Nature of Service</h2>
          <p className="text-[var(--gray-600)] leading-relaxed">Test Your World is a consumer screening service, not a medical or diagnostic product. Results are provided for informational purposes only and are not intended to diagnose, treat, cure, or prevent any disease. Results should not replace professional medical or environmental advice.</p>
          <h2 className="text-xl font-[Outfit] font-bold mt-8 mb-3">Orders and Payment</h2>
          <p className="text-[var(--gray-600)] leading-relaxed">All orders are processed through our Shopify storefront. Prices are listed in USD and CAD. Payment is collected at the time of purchase. We reserve the right to modify pricing at any time.</p>
          <h2 className="text-xl font-[Outfit] font-bold mt-8 mb-3">Sample Handling</h2>
          <p className="text-[var(--gray-600)] leading-relaxed">Samples are analyzed at our accredited laboratories in Canton, Michigan (USA) and Windsor, Ontario (Canada). We follow strict chain-of-custody protocols. Samples are retained for 30 days after report delivery and then disposed of properly.</p>
          <h2 className="text-xl font-[Outfit] font-bold mt-8 mb-3">Limitation of Liability</h2>
          <p className="text-[var(--gray-600)] leading-relaxed">Test Your World provides screening-level information. We are not responsible for decisions made based on test results. For health or safety concerns, consult a qualified healthcare provider or licensed environmental professional.</p>
          <h2 className="text-xl font-[Outfit] font-bold mt-8 mb-3">Intellectual Property</h2>
          <p className="text-[var(--gray-600)] leading-relaxed">Test Your World™ is a trademark of BRS Lab Services. All content, methodologies, and report formats are proprietary. Patent pending.</p>
          <h2 className="text-xl font-[Outfit] font-bold mt-8 mb-3">Contact</h2>
          <p className="text-[var(--gray-600)] leading-relaxed">Questions about these terms? Contact us at <a href="mailto:support@testyourworld.com" className="text-[var(--cyan)]">support@testyourworld.com</a>.</p>
          <p className="text-[var(--gray-500)] mt-8 text-xs">© 2026 BRS Lab Services. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}
