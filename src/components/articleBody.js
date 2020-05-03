import React from "react"
import Header from "./header"
import Footer from "./footer"
import Navbar from "./navbar"

/**
 * ArticleBody displays the full blog on a page after clicking on an article summary link
 * 
 * Article Body contains the following information:
 * Title, Author Avatar, Author, Date, Post
 * 
 * In otherwords, should link to the .md article files and display all info there, plus an Avatar image
 */
const ArticleBody = () => {

    return (
        <div>
            <div>
                <Header />
                <Navbar />
                <h1> Article Title </h1>
                <ol>
                    <li>
                        <img> Author Avatar </img>
                        <h3> Author</h3>
                        <h3> Date</h3>
                        <p> Post </p>
                    </li>
                </ol>
            </div>
            <Footer />
        </div >
    )

}

export default ArticleBody