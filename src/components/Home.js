import React from 'react';
import AppMain from './AppMain';
// import FactDisplay from './FactDisplay';
const Home = ({handleCategoryChange, categories, selectedCategory}) => {
  return (
    <div className="home-container">
        <AppMain
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
          
        />    


      <h1>Welcome to History Facts</h1>
      <p>Explore and learn interesting facts about history.</p>

    </div>
  );
};

export default Home;
