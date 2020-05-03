import React from 'react'
import footerStyle from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <div className={`footerStyle.container, footerStyle.flex`}>
      <ul className={footerStyle.flex}>
        <h2>Follow us for more!</h2>
        <li className={footerStyle.snsList}><a className="fafa" href="https://twitter.com"><i className="fa fa-twitter-square" ></i></a></li>
        <li className={footerStyle.snsList}><a href="https://github.com/chingu-voyages/v18-toucans-team-05"><i className="fa fa-github" ></i></a></li>
        <li className={footerStyle.snsList}><a href="https://facebook.com"><i className="fa fa-facebook-square" ></i></a></li>
        <h2>&copy; Toucan's-Team-05, 2020.</h2>
      </ul>
    </div>
  )
}

export default Footer