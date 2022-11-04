/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  env: {
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import "abstracts/variables.scss";
      @import "abstracts/_mixins/all.scss";
    `,
  },
}

module.exports = nextConfig
