import React, { useState } from "react";
import quotes from './quotes.json';

function Quote() {
  const [currentQuote, setCurrentQuote] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    setCurrentQuote(quote);
  };

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <button onClick={getRandomQuote}>Get Quote</button>
      <p>{currentQuote.quote}</p>
      <p>- {currentQuote.author}</p>
    </div>
  );
}

export default Quote;