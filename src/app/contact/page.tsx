import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Test Your World. Labs in Canton, Michigan and Windsor, Ontario. support@testyourworld.com",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-[var(--navy)] pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-[Outfit] text-white mb-4">Contact Us</h1>
          <p className="text-gray-400">Questions? We&apos;re here to help.</p>
        </div>
      </section>

      <section className="py-20 bg-[var(--gray-100)]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-[Outfit] font-bold mb-6">Drop Us a Line!</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--gray-600)] mb-1.5">Name</label>
                <input id="name" type="text" className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--cyan)] focus:ring-2 focus:ring-[var(--cyan)]/20 outline-none transition-all text-sm" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--gray-600)] mb-1.5">Email *</label>
                <input id="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--cyan)] focus:ring-2 focus:ring-[var(--cyan)]/20 outline-none transition-all text-sm" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--gray-600)] mb-1.5">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--cyan)] focus:ring-2 focus:ring-[var(--cyan)]/20 outline-none transition-all text-sm resize-y" placeholder="How can we help?" />
              </div>
              <button type="submit" className="w-full bg-[var(--cyan)] text-[var(--navy)] py-3.5 rounded-xl font-[Outfit] font-bold text-lg hover:bg-[#00D4ED] transition-all">
                Send
              </button>
            </form>
          </div>

          {/* Info */}
          <div>
            <div className="mb-8">
              <h3 className="font-[Outfit] font-bold text-lg mb-3">🇺🇸 U.S. Lab</h3>
              <p className="text-[var(--gray-600)] text-sm leading-relaxed">
                45260 Indian Creek Drive<br />
                Canton Township, MI 48187, USA
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-[Outfit] font-bold text-lg mb-3">🇨🇦 Canada Lab</h3>
              <p className="text-[var(--gray-600)] text-sm leading-relaxed">
                4510 Rhodes Drive #700<br />
                Windsor, ON N8W 5K5, Canada
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-[Outfit] font-bold text-lg mb-3">📧 Email</h3>
              <a href="mailto:support@testyourworld.com" className="text-[var(--cyan)] font-semibold hover:underline">
                support@testyourworld.com
              </a>
            </div>
            <div>
              <h3 className="font-[Outfit] font-bold text-lg mb-3">🕐 Hours</h3>
              <div className="text-sm text-[var(--gray-600)] space-y-1">
                <p>Mon – Fri: 9:00 AM – 5:00 PM</p>
                <p>Sat – Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
