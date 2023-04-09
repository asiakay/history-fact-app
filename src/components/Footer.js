import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
background-color: #282c34;
padding: 1rem;
color: #ffffff;
text-align: center;
`;


function Footer() {
    return (
      <StyledFooter>
        <div>
        <div>
&copy; <a href="https://www.asialakay.net">2023 Asialakay.net</a>
      </div>
      </div>
      </StyledFooter>
    );
  }
  

export default Footer;




