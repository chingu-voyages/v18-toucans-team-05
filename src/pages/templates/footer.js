import React from 'react' 

const Footer = ()=> { 
  return ( 
    <div className={flex}> 
      <ul className={menuList}> 
        <li>About</li> 
        <li>Concept</li> 
        <li>Terms</li> 
        <li>Q&amp;A</li> 
        <li>Contact</li> 
      </ul> 
      <ul className={snsList}> 
        <li><i class="fab fa-twitter"></i></li> 
        <li><i class="fab fa-github"></i></li> 
        <li><i class="fab fa-facebook-square"></i></li> 
      </ul> 
    </div> 
  ) 
}

export default Footer