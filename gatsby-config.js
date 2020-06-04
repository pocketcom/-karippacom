module.exports = {
  siteMetadata: {
    title: `借りっぱなし.com`,
    description: `金融ブラック金策情報を専門に掲載しています。超ブラック、延滞ブラック、債務整理中の人でもお金を借りられる最新の情報のみを掲載しています。諦める前に一度ご覧になってみてください。`,
    author: `@My Name Is None`,
    siteUrl: `https://karippa.online`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-134714447-3",
        head: true,
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `karippa.com`,
        short_name: `karippa`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
