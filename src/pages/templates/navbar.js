import React from 'react' 

const Navbar = ()=> { 
  return ( 
    <div className={flex}> 
      <ul className={articleList}> 
        <li>Most Read Articles</li> 
        <li className={flex}><img src={src1} /><p>Monthly</p></li> 
        <li className={flex}><img src={src2} /><p>Weekly</p></li> 
        <li className={flex}><img src={src3} /><p>Daily</p></li> 
      </ul> 
      <ul className={artcleTag}> 
        <li>Popular Article Tags</li> 
        <li className={flex}><p>&#;React</p></li> 
        <li className={flex}><p>&#;CSS</p></li> 
        <li className={flex}><p>&#;Beginner</p></li> 
        <li className={flex}><p>&#;Javascript</p></li> 
      </ul> 
    </div> 
  ) 
} 

export default Navbar