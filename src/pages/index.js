import * as React from "react"
import { graphql } from "gatsby"
import { Stack } from "@chakra-ui/layout"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Job from "../components/pages/job"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const experience = data.site.siteMetadata?.experience

  if (experience.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <Stack spacing={8}>
        {experience.map(job => {
          const title = job.title
          const company = job.company
          const dates = job.dates
          const description = job.description
          const technologies = job.technologies

          return (
            // <li key={title + company}>
              <Job
                title={title}
                company={company} 
                description={description}
                dates={dates}
                technologies={technologies}
              />
            // </li>
          )
        })}
      </Stack>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        experience {
          title
          description
          company
          dates
          technologies
        }
      }
      
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
