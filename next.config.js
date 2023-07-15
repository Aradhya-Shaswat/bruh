/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'cdn.pixabay.com',
      'p16-amd-va.tiktokcdn.com',
      'image.shutterstock.com',
      'media.discordapp.net',
      'instagram.fpat2-3.fna.fbcdn.net',
      'external.xx.fbcdn.net',
    ],
  },
};

module.exports = nextConfig;
