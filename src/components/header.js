import React from 'react' 
import headerStyle from './header.module.scss'

const Header = ()=> { 
  return ( 
    <div > 
      <ul className={ headerStyle.flex }> 
        <li>About</li> 
        <li>Concept</li> 
        <li>Terms</li> 
        <li>Q&amp;A</li> 
        <li>Contact</li> 
      </ul> 
    </div> 
  ) 
} 

export default Header