import React from 'react' 
import headerStyle from './header.module.scss'
import {Link} from 'gatsby'

const Header = ()=> { 
  return ( 
    <div className={headerStyle.container}>
      <ul className={ headerStyle.flex }>
        <li className={headerStyle.list_}><Link to="/">Home</Link></li>
        <li className={headerStyle.list_}><Link to="/about">About</Link></li>
        <li className={headerStyle.list_}><Link to="/terms">Terms</Link></li>
        <li className={headerStyle.list_}><Link to="/contact">Contact</Link></li> 
      </ul> 
    </div> 
  ) 
} 

export default Header