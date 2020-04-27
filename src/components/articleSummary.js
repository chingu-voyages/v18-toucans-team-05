import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import articleSummaryStyles from "./articleSummary.module.scss";

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
                  fields {
                      slug
                  }
              }
          }
      }
  }
`)

  return (
    <div className={ articleSummaryStyles.container}>
      <h1>Articles</h1>
        <ol>
            {data.allMarkdownRemark.edges.map((edge) => {
                return (
                    <li>
                        <Link to={`/article/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </Link>
                    </li>
                )
            })}
        </ol>
    </div>
  )
}

export default ArticleSummary