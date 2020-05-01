import React from 'react';
import Layout from '../components/layout'
import pagesStyle from '../styles/pages.module.scss'

const About = ()=> {
  return (
    <Layout>
      <div class={pagesStyle.container}>
        <h1>About DEV</h1>
        <p>DEV is a community of software developers getting together to help one another out. The software industry relies on collaboration and networked learning. We provide a place for that to happen.
        <br />
        <br />
        Our application is open source, meaning you can inspect every little detail of the code, or chip in yourself! We are working to make our platform available for anyone to stand up similar communities in any niche or passion.
        <br />
        <br />
        We believe in transparency and adding value to the ecosystem. We hope you poke around and like what you see!
        </p>
      </div>
    </Layout>
  )
}

export default About;