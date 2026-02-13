import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Test Your World privacy policy. How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-navy pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-outfit text-white">Privacy Policy</h1>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gray-500 leading-relaxed"><em>Last updated: February 2026</em></p>
          <p className="text-gray-600 leading-relaxed mt-4">
            BRS Lab Services (&quot;Test Your World,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share information when you use our website (www.testyourworld.com), purchase our testing kits, or interact with our services.
          </p>
          <h2 className="text-xl font-outfit font-bold mt-8 mb-3">Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">When you place an order or create an account, we collect your name, email address, mailing address, and payment information. We also collect information about your home (square footage, HVAC type, number of occupants) to provide accurate test results and context in your report.</p>
          <h2 className="text-xl font-outfit font-bold mt-8 mb-3">How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed">We use your information to process orders, deliver test results, provide customer support, and improve our services. We do not sell your personal information to third parties.</p>
          <h2 className="text-xl font-outfit font-bold mt-8 mb-3">Data Security</h2>
          <p className="text-gray-600 leading-relaxed">We implement industry-standard security measures to protect your information. Test results are encrypted and accessible only through your secure Client Portal.</p>
          <h2 className="text-xl font-outfit font-bold mt-8 mb-3">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">If you have questions about this Privacy Policy, contact us at <a href="mailto:support@testyourworld.com" className="text-cyan">support@testyourworld.com</a>.</p>
          <p className="text-gray-500 mt-8 text-xs">&copy; 2026 BRS Lab Services. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}
