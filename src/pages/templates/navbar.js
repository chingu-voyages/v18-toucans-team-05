import React from 'react' 
import './navbar.css'

const Navbar = ()=> { 
  return ( 
    <div className="navcontainer"> 
      <ul className="articleList"> 
        <li>Most Read Articles</li> 
        <li className="flex right"><p><i class="fas fa-laptop-code"></i></p><p>Monthly</p></li> 
        <li className="flex right"><p><i class="fas fa-laptop-code"></i></p><p>Weekly</p></li> 
        <li className="flex right"><p><i class="fas fa-laptop-code"></i></p><p>Daily</p></li> 
      </ul> 
      <ul className="artcleTag"> 
        <li>Popular Article Tags</li> 
        <li className="flex right"><p>#React</p></li> 
        <li className="flex right"><p>#CSS</p></li> 
        <li className="flex right"><p>#Beginner</p></li> 
        <li className="flex right"><p>#Javascript</p></li> 
      </ul> 
    </div> 
  ) 
} 

export default Navbar