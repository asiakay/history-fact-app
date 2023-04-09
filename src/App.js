import React from 'react';
import GlobalStyle from "./GlobalStyle";
import Background from "./components/Background";
import QuoteDisplay from './components/QuoteDisplay';
//import './style.css'
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';



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
  return (
    <>
    <GlobalStyle />
    <div className="App">
      <Header/>
      <AppMain>
        <QuoteDisplay />
      </AppMain>
     <Background/>

<Footer/>
    </div> </>

  );
}

export default App;