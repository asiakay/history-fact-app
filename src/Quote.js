import React, { useState } from 'react';
import ShareModal from './ShareModal';

const Quote = ({ quotes }) => {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function handleNewQuoteClick() {
    setCurrentQuote(getRandomQuote());
  }

  return (
    <div className="quote">
      <p>{currentQuote.description}</p>
      <p className="person">{currentQuote.person}</p>
      <ShareModal quote={currentQuote} />
      <button onClick={handleNewQuoteClick}>New Quote</button>
    </div>
  );
};

export default Quote;
