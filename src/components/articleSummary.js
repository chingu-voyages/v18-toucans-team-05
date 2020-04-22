import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
const ArticleSummary = ()=> {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
`)

  return (
    <ol>
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <li>
            <h2>{edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.date}</p>
          </li>
        )
    })}
    </ol>
  )
}

export default ArticleSummary