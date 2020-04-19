import React from 'react' 
import contentStyles from './content.module.scss'

const Content = ()=> { 
  return ( 
    <div className={ contentStyles.articlecontainer }> 
      <ul className={ contentStyles.articlelist }>
        <li className={ contentStyles.articlelist }><p>Monthly</p></li> 
        <li className={ contentStyles.articlelist }><p>Weekly</p></li> 
        <li className={ contentStyles.articlelist }><p>Daily</p></li> 
      </ul> 
    </div> 
  ) 
} 

export default Content