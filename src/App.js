import React, { useEffect, useState } from 'react';
import GlobalStyle from "./GlobalStyle";
//import './style.css'
import quotes from '../src/data/quotes.json';
//import AppMain from '../src/components/AppMain';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home'; // Import the Home component
import { auth } from './firebase/firebase'; // Import your Firebase auth instance
import { onAuthStateChanged } from 'firebase/auth';

function App() {
      /* Add state variables to store the selected category and filtered quotes: */
      const [selectedCategory, setSelectedCategory] = useState('');
      
      const categories = Array.from(
        new Set(
          quotes
          .map((quote) => quote.category)
          .flat()
          )
        );
    
    
      // Add a user state variable
  const [user, setUser] = useState(null);

  // Add an effect to listen for authentication changes
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return () => {
    unsubscribe();
  };
}, []);

const handleCategoryChange = (category, event) => {
  setSelectedCategory(category);
};



/*       const handleCategoryChange = (category, event) => {
        //const value = event.target.value;
        setSelectedCategory(category);
      }; */
// eslint-disable-next-line no-unused-vars
const filteredQuotes = selectedCategory
  ? quotes.filter((quote) => {
      const categories = Array.isArray(quote.category)
        ? quote.category
        : [quote.category];
      return categories.some((cat) => cat === selectedCategory);
    })
  : quotes;

      
  return (
    <>
    <GlobalStyle />
    <Router>

    <div className="App">
      
<Routes>
<Route path="/" element={<Home handleCategoryChange={handleCategoryChange} categories={categories} quotes={quotes} selectedCategory={selectedCategory} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          </Routes>

    </div> 
    </Router>
</>

  );
}

export default App;