module.exports = {
  siteMetadata: {
    name: 'Bridge the gap between design and development',
    basepath: 'https://bridge-tool.github.io',
    description: 'Bridge is a tool to bridge the gap between design and development.',
    keywords: ['design systems', 'design', 'development', 'ui'],
    type: 'website',
    image: 'https://bridge-tool.github.io/bridge.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          pages: require.resolve('./src/templates/Page.js'),
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/bridge.png', // This path is relative to the root of the site
      },
    },

    // The following are all optional plugins that you may find useful.
    // If you choose not to use them, consider removing them from your package.json!

    // This plugin enables Progressive Web App + Offline functionality
    // https://gatsby.app/offline
    // 'gatsby-plugin-offline',

    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
    //     head: false,
    //     anonymize: false,
    //     respectDNT: false,
    //   },
    // },

    // (optional) Enable the following for Google tag manager
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-tagmanager/
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: 'YOUR_GOOGLE_TAGMANAGER_ID',
    //     defaultDataLayer: { platform: "gatsby" },
    //   },
    // },

    // (optional) Enable the following for generation of an XML sitemap
    // https://www.gatsbyjs.org/packages/gatsby-plugin-advanced-sitemap/
    // 'gatsby-plugin-advanced-sitemap',
  ],
};
