/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true, 
  output: 'export',
  images: {
    disableStaticImages: true
  }
}
module.exports = nextConfig
