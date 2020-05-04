import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import notFoundStyles from '../styles/404.module.scss'


const notFound = () => {
  return (
    <Layout>
        <div className={ notFoundStyles.container}>
        <h1 className={notFoundStyles.notFoundTitle}>404? OH NO! </h1>
        <img src="https://images.unsplash.com/photo-1455380579765-810023662ea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
        <p className={notFoundStyles.linkText}><Link to="/">Time to go home!</Link> </p>
        </div>
    </Layout>
  )
}

export default notFound