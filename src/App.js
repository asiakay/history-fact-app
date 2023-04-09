import React, { useState } from 'react';
import GlobalStyle from "./GlobalStyle";
import Background from "./components/Background";
import QuoteDisplay from '../src/components/QuoteDisplay';
//import './style.css'
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import quotes from '../src/data/quotes.json';


const AppMain = styled.main`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #ca1122;
  margin-top: 0px;
`;

function App() {
      /* Add state variables to store the selected category and filtered quotes: */
      const [selectedCategory, setSelectedCategory] = useState('');
      const categories = Array.from(new Set(quotes.map((quote) => quote.category)));
    
      const handleCategoryChange = (event) => {
        const value = event.target.value;
        setSelectedCategory(value === '' ? 'all' : value);
      };

       const filteredQuotes = selectedCategory
      ? quotes.filter((quote) => quote.category === selectedCategory)
      : quotes;
 
  return (
    <>
    <GlobalStyle />
    <div className="App">
      <Header 
      categories={categories}
      selectedCategory={selectedCategory}
      handleCategoryChange={handleCategoryChange}/>
      <AppMain>
      <QuoteDisplay 
      selectedCategory={selectedCategory}
      quotes={quotes} />

      </AppMain>
     <Background/>

<Footer/>
    </div> </>

  );
}

export default App;