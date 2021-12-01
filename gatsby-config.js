module.exports = {
  siteMetadata: {
    title: `Daniel Torres`,
    author: {
      name: `Daniel Torres Estrada`,
      summary: `Proud Mexican Engineer with 4+ years of experience, Actually i'm Data Engineer at Dat's Why and Sometimes Full Stack Assesor at Somos.`,
    },
    description: `Personal Site and coming soon personal Blog`,
    siteUrl: `https://toodaniels.github.io/`,
    social: {
      twitter: `toodaniels`,
      github:'toodaniels',
      facebook:'toodaniels',
      linkendin:'toodaniels'
    },
    experience: [
      {
        title:'Data Engineer',
        description:'Geospatial Data Cleaning and Analysis with Python and SQL (Postgis and Presto) on AWS. Design development and implementation of Data Pipelines using Apache Airflow on AWS, Design and development of custom operators for Apache Airflow.',
        company:"Dat's Why",
        dates:'March 15 2020 - Actually',
        technologies:['Airflow', 'Python', 'AWS', 'Presto', 'Postgis', 'Docker']
      }, {
        title: "Full Stack Developer ",
        description: "Development, support and deployment of PWA developed with React/Redux and MaterialUI. Development, support and deployment of service using NodeJS / express and MongoDB. Implementation and deployment of application developed in Python for Genomic Data Analysis with Docker. MongoDB database administration. Online store management developed with Woorpress and Woocommerce.",
        company: "Somos Ancestría",
        dates:"March 2019 - February 2020",
        technologies: ['React', 'NodeJS','Express', 'MongoDB', 'Docker', 'Woorpress','Woocommerce', 'Python']
      },{
        title: "Full Stack Developer",
        description: "Development of Administration Web app Using ReactJS. Development of Api Rest Full using NodeJS with MySQL and CrateDB using Sequelize. Web service development using Python / Flask to manage push notifications for mobile applications using Firebase Cloud Messaging. Dockerization of web services developed for deployment in conjunction with the services offered on the Fiware platform (Docker compose). Work with the most important technologies of the FIWARE platform.",
        company: "Cenidet",
        dates:"January 2018 - February 2019",
        technologies: ['React', 'MySQL', 'Python','Flask', 'Firebase', 'Docker', 'Python', 'Fiware']
      },{
        title: "Mobile Developer",
        description: "I was the main developer of a mobile application developed using React Native, creating native modules for Android. Development and implementation of Api Rest Full using NodeJS and MongoDB. I contributed to the development of an npm library called NGSIJS, making two npm ngsi-parser and ocb-sender modules.",
        company: "Cenidet",
        dates:"August 2017 - January 2018",
        technologies: ['React Native', 'Android', 'Java', 'NodeJS', 'MongoDB']
      }
    ],
    education:[]
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
                experience {
                  title
                  description
                  company
                  dates
                  technologies
                }
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    "@chakra-ui/gatsby-plugin",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
