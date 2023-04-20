/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["img.opencritic.com"]
  }
}

module.exports = nextConfig
