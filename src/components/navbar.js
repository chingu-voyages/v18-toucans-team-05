import React from 'react'
import navbarStyle from '../styles/navbar.module.scss'
import { Link } from 'gatsby'
//import { Container, Logo } from './search/styles.js'
import Search from './search'

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const Navbar = ({ site, transparent }) => {
  return (
    <div className={navbarStyle.navcontainer}>
      <ul className={navbarStyle.articleList}>
        <li><h4>Most Read Articles</h4></li>
        <li className={`navbarStyle.flex, navbarStyle.right`}>
          <p><i className="fas fa-laptop-code"></i></p>
          <p><Link to="/monthly">Monthly</Link></p>
        </li>
        <li className={`navbarStyle.flex, navbarStyle.right`}>
          <p><i className="fas fa-laptop-code"></i></p>
          <p><Link to="/weekly">Weekly</Link></p>
        </li>
        <li className={`navbarStyle.flex, navbarStyle.right`}>
          <p><i className="fas fa-laptop-code"></i></p>
          <p><Link to="/daily">Daily</Link></p>
        </li>
      </ul>
      <ul className="artcleTag">
        <li><h4>Popular Article Tags</h4></li>
        <li className={`navbarStyle.flex, navbarStyle.right`}><p ><Link to="/beginner">#Beginner</Link></p></li>
        <li className={`navbarStyle.flex, navbarStyle.right`}><p><Link to="/tool">#Tool</Link></p></li>
        <li className={`navbarStyle.flex, navbarStyle.right`}><p><Link to="/react">#React</Link></p></li>
        <li className={`navbarStyle.flex, navbarStyle.right`}><p><Link to="/javascript">#Javascript</Link></p></li>
        <li className={`navbarStyle.flex, navbarStyle.right`}><p><Link to="/css">#CSS</Link></p></li>
      </ul>
      <Search collapse indices={searchIndices} />
    </div>
  )
}

export default Navbar