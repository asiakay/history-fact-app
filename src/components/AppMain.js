import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import QuoteDisplay from "./QuoteDisplay";
import styled from "styled-components";
import Header from './Header';
import Background from "./Background";
import Footer from './Footer';

const breakpoints = {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  };
  const MainContainer = styled.main`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    background-color: #ca1122;
    margin-top: 0px;
    width: 100%;
    box-sizing: border-box;
    @media (min-width: ${breakpoints.sm}) {
      padding: 0px;
    }
  
    @media (min-width: ${breakpoints.md}) {
      padding: 0px;
    }
  
    @media (min-width: ${breakpoints.lg}) {
      padding: 0px;
    }
  `;

  const AppMain = ({ categories, selectedCategory, handleCategoryChange, quotes }) => {
    return (
      <>
              <Header />

         <CategoryDropdown
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
          />
                    <QuoteDisplay selectedCategory={selectedCategory} quotes={quotes} />

        <MainContainer>
         
          <Background />
        </MainContainer>
        <Footer />

      </>
    );
  };
  
  export default AppMain;