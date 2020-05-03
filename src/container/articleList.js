import React from "react"
import ArticleSummary from "../components/articleSummary"

/**
 * Article List Container
 * 
 * Is a grid displaying all of the Avaliable Articles' Article Summaries
 * (as of now 6 -> Should display in a 3x3 grid)
 * 
 * Aricle Summary Content should display on each selection
 * 
 */

const ArticleList = () => {
    return (
        <div class="grid">
            <div><ArticleSummary /></div>
            <div><ArticleSummary /></div>
            <div><ArticleSummary /></div>
            <div><ArticleSummary /></div>
            <div><ArticleSummary /></div>
            <div><ArticleSummary /></div>
        </div>
    )
}
export default ArticleList

