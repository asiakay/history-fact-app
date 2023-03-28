import React, { useState, useEffect } from 'react';
import quotes from '../data/quotes.json';

function QuoteDisplay() {
  const [quote, setQuote] = useState('');


  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(`${randomQuote.year} - ${randomQuote.person} - ${randomQuote.description} - ${randomQuote.source}`);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  if (typeof quote !== 'string') {
    return null;
  }

  const [year, person, description, source] = quote.split(' - ');

  return (
    
    <div className="quote-display">
      <p className="quote-year">{year}</p>
      <p className="quote-person">{person}</p>
      <p className="quote-description">{description}</p>
      <button onClick={getRandomQuote}>New Quote</button><br/>
      <button onClick={() => window.open(source, '_blank')}>Learn More</button>
    </div>
  );
}

export default QuoteDisplay;
