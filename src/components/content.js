import React from 'react' 
import './content.css'

const Content = ()=> { 
  return ( 
    <div className="articlecontainer"> 
      <ul className="articleList flex">
        <li className="articlelist"><p>Monthly</p></li> 
        <li className="articlelist"><p>Weekly</p></li> 
        <li className="articlelist"><p>Daily</p></li> 
        <li className="articlelist"><p>Monthly</p></li>
        <li className="articlelist"><p>Weekly</p></li> 
        <li className="articlelist"><p>Daily</p></li> 
      </ul> 
    </div> 
  ) 
} 

export default Content