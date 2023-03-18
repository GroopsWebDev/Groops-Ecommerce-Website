// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  env: {
    MINIO_REGION: process.env.MINIO_REGION || "",
    MINIO_ACCESS_KEY: process.env.MINIO_ACCESS_KEY || "",
    MINIO_SECRET_KEY: process.env.MINIO_SECRET_KEY || "",
    MINIO_ENDPOINT: process.env.MINIO_ENDPOINT || "",
  },
};
export default config;
