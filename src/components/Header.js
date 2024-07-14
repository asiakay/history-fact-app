import React from 'react';
import styled from 'styled-components';
import Login from './Login';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
//import CategoryDropdown from "./CategoryDropdown";







function Header() {
  const breakpoints = {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  };


  const StyledHeader = styled.header`
  height: 100px;
  background-color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100vw;

  @media (min-width: ${breakpoints.md}) {
    padding: 0 40px;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 0 60px;
  }
`;

 const Title = styled.h1`
  font-size: 22px;
  line-height: 1.5;
  margin: 0;
  display: flex;
  align-items: center;
  color: white;

  svg {
    width: 24px;
    height: 24px;
    fill: #ffd700; /* gold color */
    margin-right: 8px;
  }


  @media (min-width: ${breakpoints.md}) {
    font-size: 28px;

    svg {
      width: 28px;
      height: 28px;
      margin-right: 12px;
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 32px;

    svg {
      width: 32px;
      height: 32px;
      margin-right: 16px;
    }
  }
`;


function HeaderNavigation({ categories, selectedCategory, handleCategoryChange }){
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home"><Title> {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
  <path d="M18.707,1.293c-0.391-0.391-1.023-0.391-1.414,0l-1.958,1.958l1.414,1.414l1.958-1.958C19.098,2.316,19.098,1.684,18.707,1.293z"/>
  <path d="M14.293,5.707l-7.485,7.485l-1.414-1.414l7.485-7.485c0.391-0.391,1.023-0.391,1.414,0l0,0C14.684,4.684,14.684,5.316,14.293,5.707z"/>
  <path d="M3.008,20.975L0,24l2.025-2.025c0.096-0.096,0.204-0.182,0.318-0.255C2.438,21.486,2.721,21,3.268,21H19v-2H3.109C3.057,18.875,3.022,18.75,3,18.623V18H2v2C2,20.202,2.798,20.986,3.008,20.975z"/>
</svg>  */}


Black History Facts</Title></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
         {/*  <CategoryDropdown
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      /> */}
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

  
  
return (
  <>
    <StyledHeader>
      <HeaderNavigation />
      <Navbar.Text>
        <Login />
      </Navbar.Text>
    </StyledHeader>
  </>
);
}

export default Header;