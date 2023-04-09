import React, { useState, useEffect } from 'react';
import quotes from '../data/quotes.json';
import styled from 'styled-components';



const QuoteDisplayContainer = styled.div`
display: flex;
flex-direction: column;
width: 80%;
align-items: center;
justify-content: center;
height: calc(
  90vh - 200px
);
background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 600px;
  padding: 4px 24px;
`;

const QuoteText = styled.p`
font-family: Arial, sans-serif;
  
font-size: 1 rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
  max-width: 80%;
  height: 20vh;
`;


const QuoteYear = styled.p`
  font-size: 24px;
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
  cursor: pointer;
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
`;

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
    
 
   <QuoteDisplayContainer>
      <QuoteYear>{year}</QuoteYear>
      <QuotePerson>{person}</QuotePerson>
      <QuoteText> {description}</QuoteText>
      <ButtonContainer>

      <Button onClick={getRandomQuote}>New Quote</Button><br/>
      <Button onClick={() => window.open(source, '_blank')}>Learn More</Button>
      </ButtonContainer>
      </QuoteDisplayContainer>
   
  );
}

export default QuoteDisplay;