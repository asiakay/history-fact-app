import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 60px;
  background-color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

 const Title = styled.h1`
  font-size: 24px;
  line-height: 1.5;
  margin: 0;
  display: flex;
  align-items: center;
  color: white;
`;


function Header() {
  return (
    <StyledHeader>
        <Title>
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
  <path d="M18.707,1.293c-0.391-0.391-1.023-0.391-1.414,0l-1.958,1.958l1.414,1.414l1.958-1.958C19.098,2.316,19.098,1.684,18.707,1.293z"/>
  <path d="M14.293,5.707l-7.485,7.485l-1.414-1.414l7.485-7.485c0.391-0.391,1.023-0.391,1.414,0l0,0C14.684,4.684,14.684,5.316,14.293,5.707z"/>
  <path d="M3.008,20.975L0,24l2.025-2.025c0.096-0.096,0.204-0.182,0.318-0.255C2.438,21.486,2.721,21,3.268,21H19v-2H3.109C3.057,18.875,3.022,18.75,3,18.623V18H2v2C2,20.202,2.798,20.986,3.008,20.975z"/>
</svg> Black History Facts</Title>
</StyledHeader>
  );
}

export default Header;
