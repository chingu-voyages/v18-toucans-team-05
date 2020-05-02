import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import articleSummaryStyles from "../styles/articleSummary.module.scss";

const ArticleSummary = () => {

  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            author
            category
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
    <div className={articleSummaryStyles.container}>
      <h1 className={articleSummaryStyles.artTitle}>Articles</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <Link to={`/article/${edge.node.fields.slug}`} key={`/article/${edge.node.fields.slug}`}>
              <div className={articleSummaryStyles.articlebx}>
                <li>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <div className={articleSummaryStyles.category}>&#35;{edge.node.frontmatter.category}</div>
                  <div className={articleSummaryStyles.flex} >
                    <div className={articleSummaryStyles.date}>{edge.node.frontmatter.date} &#47;</div>
                    <div className={articleSummaryStyles.author}>{edge.node.frontmatter.author}</div>
                  </div>
                </li>
              </div>
            </Link>
          )
        })}
      </ol>
    </div>
  )
}



export default ArticleSummary