/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "avatars.dicebear.com",
      "images.pexels.com",
      "www.pexels.com",
      "platform-lookaside.fbsbx.com",
      "static.xx.fbcdn.net",
    ],
  },
};

module.exports = nextConfig;