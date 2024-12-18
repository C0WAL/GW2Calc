/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `GW2 Calculator`,
    description: `A simple calculator for all things Guild Wars 2.`,
    image: `src/images/logo.png`,
    siteUrl: `https://gw2calc.netlify.app/`
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/logo.png"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images/`
      },
    }
  ]
};