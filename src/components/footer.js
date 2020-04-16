import React from 'react' 
import './footer.css'
const Footer = ()=> { 
  return ( 
    <div className="container flex"> 
      <ul className="flex"> 
        <li className="menuList">About</li> 
        <li className="menuList">Concept</li> 
        <li className="menuList">Terms</li> 
        <li className="menuList">Q&amp;A</li> 
        <li className="menuList">Contact</li> 
      </ul> 
      <ul className="flex"> 
        <li className="snsList"><i class="fab fa-twitter"></i></li> 
        <li className="snsList"><i class="fab fa-github"></i></li> 
        <li className="snsList"><i class="fab fa-facebook-square"></i></li> 
      </ul> 
    </div> 
  ) 
}

export default Footer