import React, { useState, useEffect } from "react";
import "../styles/App.css";

var colors = [
  '#E1BEE7',
  '#FFCDD2',
  '#F8BBD0',
  '#FFCCBC',
  '#FFECB3',
  '#F0F4C3',
  '#C8E6C9',
  '#B2DFDB',
  '#B3E5FC',
  '#BBDEFB',
  '#C5CAE9',
  '#D1C4E9'
];

const App = () => {
  const [quote, setQuote] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  useEffect(() => {fetchQuote()} , []);

  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
        setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id="main">

      <div id="wrapper">

        {quote && (

          <div id="quote-box" style={{  backgroundColor: backgroundColor }}>
            
            <div className="quote-text">{quote.content}</div>
            <div className="quote-author">- {quote.author}</div>
           
            <div className="buttons">
              <button id="new-quote" className="button" onClick={fetchQuote}> New Quote </button>
            </div>
          
          </div> ) }

      </div>

    </div>

  );

};

export default App;
