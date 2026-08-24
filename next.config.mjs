/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
  },
  async redirects() {
    return [
      // AirPatch and FilterCut retired Aug 2026 — replaced by the two
      // Whole Filter Testing tiers. Both legacy URLs have inbound links.
      { source: "/airpatch", destination: "/whole-filter-testing", permanent: true },
      { source: "/test-your-air", destination: "/whole-filter-testing", permanent: true },
    ];
  },
};

export default nextConfig;
