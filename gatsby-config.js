module.exports = {
  siteMetadata: {
    title: 'Employes website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
     resolve: `gatsby-source-contentful`,
     options: {
       spaceId: `3dbql0j6vr6a`,
       accessToken: `cf5c9cefffcd811bc14b5f4d2c27cbe06ae69f9aa6600bc87a078570bd021b41`,
     },
   },
  ],
}
