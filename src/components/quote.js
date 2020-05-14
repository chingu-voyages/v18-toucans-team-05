
import React from 'react';
import articleSummaryStyles from "../styles/articleSummary.module.scss";
import Async from 'react-async';

const loadUsers = () =>
fetch("https://quotes21.p.rapidapi.com/quote", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "quotes21.p.rapidapi.com",
        "x-rapidapi-key": process.env.API_KEY
      }
    })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

function Quote() {
  return (
    <div className="container">
      <Async promiseFn={loadUsers}>
        {({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`

          if (data)
            return (
              <div className={articleSummaryStyles.quotecon}>
                <div>	&#34;{data.quote}&#34;</div>
                <div>by {data.author}</div>
              </div>
            )
        }}
      </Async>
    </div>
  );
}

export default Quote;