/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  env: {
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
    ANALYTICS_ID: process.env.ANALYTICS_ID, 
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
