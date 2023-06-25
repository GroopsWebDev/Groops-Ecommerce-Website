/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

import pkg from './next-i18next.config.js';
const {i18n} = pkg;

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  
  i18n,
 
  images: {
    domains: ['images.clerk.dev', 'www.gravatar.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
export default config;
