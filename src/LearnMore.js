import React from 'react';

function LearnMore({ quote }) {
  return (
    <div className="learn-more">
      <h2>{quote.person}</h2>
      <h3>{quote.year}</h3>
      <p>{quote.description}</p>
      <a href={quote.source} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  );
}

export default LearnMore;
