import React from 'react' 
import footerStyle from './footer.module.scss'

const Footer = ()=> { 
  return ( 
    <div className={ `footerStyle.container, footerStyle.flex` }> 
      <ul className={ footerStyle.flex }> 
        <li className={ footerStyle.menuList }>About</li> 
        <li className={ footerStyle.menuList }>Concept</li> 
        <li className={ footerStyle.menuList }>Terms</li> 
        <li className={ footerStyle.menuList }>Q&amp;A</li> 
        <li className={ footerStyle.menuList }>Contact</li> 
      </ul> 
      <ul className={ footerStyle.flex }> 
        <li className={ footerStyle.snsList }><i className="fab fa-twitter"></i></li> 
        <li className={ footerStyle.snsList }><i className="fab fa-github"></i></li> 
        <li className={ footerStyle.snsList }><i className="fab fa-facebook-square"></i></li> 
      </ul> 
    </div> 
  ) 
}

export default Footer