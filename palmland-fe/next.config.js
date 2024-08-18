/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    domains: ["palmland-media.s3.eu-north-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
