import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import articleStyles from './articleBody.module.scss'
import pagesStyle from '../styles/pages.module.scss'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        author
    }
    html
  }
}
`

const ArticleBody = (props) => {
    return (
        <div>
          <Layout>
          <div className={ articleStyles.flex }>
            <div className={ pagesStyle.container}> 
            <h1> {props.data.markdownRemark.frontmatter.title} </h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <p> Written by {props.data.markdownRemark.frontmatter.author}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
            </div>            
            </div>
            </Layout>
        </div>
    )
}

export default ArticleBody