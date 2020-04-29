import React from 'react' 
import navbarStyle from '../components/navbar.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import BlogStyles from '../styles/blogPages.module.scss'
import beginnerimg from '../img/beginner.svg'

const Beginner = ()=> {
  const beginner = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {category: {eq: "Beginner"}}}) {
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
  console.log(beginner.allMarkdownRemark.edges)
  return ( 
    <Layout>
      <div class={BlogStyles.container}>
        <div class={BlogStyles.titlecontainer}>
          <div class={BlogStyles.flex}>
            <img src={beginnerimg} className={BlogStyles.iconimg}/>
            <h3 className={BlogStyles.title}>&#35;Begginer</h3>
          </div>
        </div>
        <ul>
          {beginner.allMarkdownRemark.edges.map((edge) => {
            return (
              <Link to={`/article/${edge.node.fields.slug}`}> 
              <div className={ BlogStyles.articlebx }>
                <h2>{edge.node.frontmatter.title}</h2>
                  <div class={BlogStyles.category}>&#35;{edge.node.frontmatter.category}</div>
                  <div class={BlogStyles.flex} >
                  <div className={BlogStyles.icon}/>
                    <div class={BlogStyles.flex} >
                      <span class={BlogStyles.date}>{edge.node.frontmatter.date} &#47;</span>
                      <span class={BlogStyles.author}>{edge.node.frontmatter.author}</span>
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

export default Beginner