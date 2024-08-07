//import { response } from 'express';

import React, { useState, useEffect, useCallback } from 'react';
import ShareButtonsComponent from './ShareButtonsComponent';
//import quotes from 'eeeeeeeeee../data/quotes.json';
import styled from 'styled-components';

const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};


const QuoteDisplayContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
justify-content: center;
height: calc(
  90vh - 200px
);
background-color: #ffffff;
  border-radius: 0px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  margin: 0px;
  max-width: 100%;
  padding: 4px 24px;

  @media (min-width: ${breakpoints.sm}) {
    padding: 16px;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 32px;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 48px;
  }
`;

const QuoteText = styled.p`
font-family: Arial, sans-serif;
font-size: 1rem;
font-weight: bold;
margin-bottom: 1rem;
color: #333;
text-align: center;
max-width: 80%;
height: 20vh;

@media (min-width: ${breakpoints.md}) {
  font-size: 1.2rem;
}

@media (min-width: ${breakpoints.lg}) {
  font-size: 1.4rem;
}
`;

const QuoteYear = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;
const QuoteLifetime = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const QuotePerson = styled.p`
  font-size: 30px;
  margin-bottom: 16px;
  font-style: italic;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;

  @media (min-width: ${breakpoints.md}) {
    gap: 24px;
  }
`;

const Button = styled.button`
 font-size: 1rem;
  border: none;
  background-color: #16d02b;
  color: #000;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffd700;
  }

  &:active {
    background-color: #222;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.7rem;
    padding: 1.2rem;
  }
`;

function FactDisplay({selectedCategory}) {
    
  const [fact, setFact] = useState(null);
  const siteUrl = 'https://history-fact-app.vercel.app';

  const getRandomQuote = useCallback(() => {
    // Filter facts by category if a category is selected
    fetch('https://history-facts-api.vercel.app/api/facts')
    .then((response) => response.json())
    .then((data) => {
      console.log('data:', data);

              // Filter quotes by category if a category is selected

  
    const filteredFacts = selectedCategory
      ? data.filter((fact) => {
          const categories = Array.isArray(fact.category)
            ? fact.category
            : [fact.category];
          return categories.some((cat) => cat === selectedCategory);
        })
      : data;
  
    if (!filteredFacts || filteredFacts.length === 0) {
      console.error('No fact data available');
      console.log('selectedCategory:', selectedCategory);

      return;
    }
  
    const randomIndex = Math.floor(Math.random() * filteredFacts.length);
    const randomFact = filteredFacts[randomIndex];
    setFact(randomFact);

  })
  .catch((error) => {
    console.error('Error fetching facts:', error);

  });
 }, [selectedCategory]);
  

  useEffect(() => {
    getRandomQuote();
  }, [getRandomQuote]);

  if ( !fact) {
    return null;
  }

  const {year, person, lifetime, description, source} = fact;

  return (
   <QuoteDisplayContainer>
      <QuoteYear>{year}</QuoteYear>
      <QuotePerson>{person}</QuotePerson>
      <QuoteLifetime>{lifetime}</QuoteLifetime>
      <QuoteText>{description}</QuoteText>
      <ButtonContainer>
      <Button onClick={getRandomQuote}>New Fact</Button><br/>
      <Button onClick={() => window.open(source, '_blank')}>Learn More</Button>
      </ButtonContainer>
      <ShareButtonsComponent 
      title={description} 
      url={source || window.location.href} 
      siteUrl={siteUrl}
      />
    </QuoteDisplayContainer>
  );
}

export default FactDisplay;
