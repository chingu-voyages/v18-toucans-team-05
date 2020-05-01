import React from 'react'
import Layout from '../components/layout'
import pagesStyle from '../styles/pages.module.scss'

const Contact = ()=> {
  const handleClick = () =>{
    alert("Thank you for the contact. We will get back to you as soon as possible!");
  }

  return (
    <Layout>
      <div class={pagesStyle.contact}>
        <h1>Contact</h1>
        <div class={pagesStyle.flex}>
          <div class={pagesStyle.label}>Name</div>
          <input type="text"></input>
        </div>
        <div class={pagesStyle.flex}>
          <div class={pagesStyle.label}>Email</div>
          <input type="email"></input>
        </div>
        <div class={pagesStyle.flex}>
          <div class={pagesStyle.label}>Subject</div>
          <input type="text"></input>
        </div>
        <div class={pagesStyle.flex}>
          <div class={pagesStyle.label}>Content</div>
          <textarea></textarea>
        </div>
        <button type="submit" onClick={handleClick}>Submit</button>
      </div>
    </Layout>
  )
}

export default Contact;