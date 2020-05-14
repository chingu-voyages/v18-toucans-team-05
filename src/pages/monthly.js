import React from 'react' 
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import BlogStyles from '../styles/blogPages.module.scss'
import calender from '../img/calender.svg'

const Monthly = ()=> {
  const monthly = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {popularity: {eq: "Monthly"}}}) {
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
  `);
  return ( 
    <Layout>
    <div className={BlogStyles.container}>
          <div className={BlogStyles.titlecontainer}>
            <div className={BlogStyles.flex}>
              <img src={calender} alt="" className={BlogStyles.iconimg}/>
              <h3 className={BlogStyles.title}>Monthly</h3>
            </div>
          </div>
      <ul>
        {monthly.allMarkdownRemark.edges.map((edge) => {
          return (
            <Link to={`/article/${edge.node.fields.slug}`} key={Math.random()}> 
              <div className={ BlogStyles.articlebx }>
                <h2>{edge.node.frontmatter.title}</h2>
                  <div className={BlogStyles.category}>&#35;{edge.node.frontmatter.category}</div>
                  <div className={BlogStyles.flex} >
                  <div className={BlogStyles.icon}/>
                    <div className={BlogStyles.flex} >
                      <span className={BlogStyles.date}>{edge.node.frontmatter.date} &#47;</span>
                      <span className={BlogStyles.author}>{edge.node.frontmatter.author}</span>
                    </div>
                  </div>
                </div>
            </Link>
            )
          })
        }
      </ul>
    </div>
  </Layout>
  ) 
} 

export default Monthly