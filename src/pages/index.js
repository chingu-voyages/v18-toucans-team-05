import React from "react"
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ArticleSummary from "../components/articleSummary";

const index = () => {
  return (
    <div>
      <Header />
      <ArticleSummary />
      <Navbar />
      <Footer />
    </div>
  )
}

export default index