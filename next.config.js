/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true, 
  images: {
    disableStaticImages: true
  }
}
module.exports = nextConfig
