/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://временно.bg",
  generateRobotsTxt: true, // (optional)
  exclude: [
    "/legal/terms-and-conditions",
    "/legal/privacy-policy",
    "/legal/cookie-policy",
  ],
  // ...other options
};
