/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.engineeredtennis.com', // <-- note the www
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://www.engineeredtennis.com/sitemap.xml'],
  },
};