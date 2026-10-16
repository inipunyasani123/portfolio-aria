/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gambar di public/ sudah WebP kecil (8–90 KB). Optimasi gambar Vercel dimatikan karena kuota
  // tim habis (402 OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED membuat gambar rusak).
  images: { unoptimized: true },
};

export default nextConfig;
