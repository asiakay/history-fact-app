import React, { useEffect, useState } from 'react';
import GlobalStyle from "./GlobalStyle";
//import './style.css'
//import facts from '../src/data/quotes.json';
//import AppMain from '../src/components/AppMain';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home'; // Import the Home component
import { auth } from './firebase/firebase'; // Import your Firebase auth instance
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [facts, setFacts] = useState([]);

      /* Add state variables to store the selected category and filtered quotes: */
      const [selectedCategory, setSelectedCategory] = useState('');
         // Add a user state variable
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    const fetchFacts = async () => {
      try {
      const response = await fetch('https://history-facts-api.vercel.app/api/facts');
      if (!response.ok){
        throw new Error('Failed to fetch facts');
      }
      const data = await response.json();
      setFacts(data);
      setIsLoading(false);
    } catch (error){
      setError(error.message)
      setIsLoading(false);

    }
    };
    fetchFacts();
  }, []);
      const categories = Array.from(
        new Set(
          facts
          .map((fact) => fact.category)
          .flat()
          )
        );
    
    


  // Add an effect to listen for authentication changes
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return () => {
    unsubscribe();
  };
}, []);

const handleCategoryChange = (category) => {
  setSelectedCategory(category);
};



/*       const handleCategoryChange = (category, event) => {
        //const value = event.target.value;
        setSelectedCategory(category);
      }; */
// eslint-disable-next-line no-unused-vars
const filteredFacts = selectedCategory
  ? facts.filter((fact) => {
      const categories = Array.isArray(fact.category)
        ? fact.category
        : [fact.category];
      return categories.some((cat) => cat === selectedCategory);
    })
  : facts;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <>
    <GlobalStyle />
    <Router>

    <div className="App">
      
<Routes>
<Route path="/" element={<Home handleCategoryChange={handleCategoryChange} categories={categories} facts={facts} selectedCategory={selectedCategory} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          </Routes>

    </div> 
    </Router>
</>

  );
}

export default App;