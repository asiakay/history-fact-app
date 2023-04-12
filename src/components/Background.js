import React from 'react';
import styled from 'styled-components';
//import ListGroup from 'react-bootstrap/ListGroup';
import Links from './Links';

const StyledBackground = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin: 0px;
    padding: 4em;
    text-align: justify;
    background-color: #ffd700;
    border-radius: 0px;
    width: 100vw;
`;

const Title = styled.h2`
font-size: 18px;
line-height: 1.5;
margin: 15px;
display: flex;
align-items: center;
color: Black;
`;


function Background(){
return(
<StyledBackground>
<Title>About Black History Facts</Title>
This app is an important tool in combating the false narrative that links race to positive contributions to society. The developer acknowledges the pervasive nature of systemic racism and how it has been used to oppress marginalized communities. The app recognizes that the social construct of race was created to establish white supremacy and as a justification for systemic oppression. From the transatlantic slave trade to Jim Crow laws, the War on Drugs, the school-to-prison pipeline, and the devaluation of African-American history, the impact of racism in the United States is far-reaching and ongoing. By shedding light on the positive contributions of historically marginalized groups, this app seeks to challenge stereotypes and inspire positive change.        
<Title>Learn More</Title>
<Links />
      </StyledBackground>
      );
      }

      export default Background;