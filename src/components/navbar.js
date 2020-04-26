import React from 'react' 
import navbarStyle from './navbar.module.scss'

const Navbar = ()=> { 
  return ( 
    <div className={ navbarStyle.navcontainer }> 
      <ul className={ navbarStyle.articleList }> 
        <li><h4>Most Read Articles</h4></li> 
        <li className={ `navbarStyle.flex, navbarStyle.right` }><p><i className="fas fa-laptop-code"></i></p><p>Monthly</p></li> 
        <li className={ `navbarStyle.flex, navbarStyle.right` }><p><i className="fas fa-laptop-code"></i></p><p>Weekly</p></li> 
        <li className={ `navbarStyle.flex, navbarStyle.right` }><p><i className="fas fa-laptop-code"></i></p><p>Daily</p></li> 
      </ul> 
      <ul className="artcleTag"> 
        <li><h4>Popular Article Tags</h4></li> 
        <li className={ `navbarStyle.flex, navbarStyle.right` }><p>#React</p></li> 
        <li className={ `navbarStyle.flex, navbarStyle.right` }><p>#CSS</p></li> 
        <li className={ `navbarStyle.flex, navbarStyle.right` }><p>#Beginner</p></li> 
        <li className={ `navbarStyle.flex, navbarStyle.right` }><p>#Javascript</p></li> 
      </ul> 
    </div> 
  ) 
} 

export default Navbar