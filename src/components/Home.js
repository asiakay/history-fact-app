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


     

    </div>
  );
};

export default Home;
