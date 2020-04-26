import React from "react"
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


import layoutStyles from './layout.module.scss'

const index = (props) => {
  return (
    <div>
      <Header />
      <div className={ layoutStyles.flex }>
      <Navbar />
        {props.children}
      </div> 
      <Footer />
    </div>
  )
}

export default index