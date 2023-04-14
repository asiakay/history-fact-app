import React from 'react';
import styled from 'styled-components';
//import ListGroup from 'react-bootstrap/ListGroup';
import Links from './Links';
import Accordion from 'react-bootstrap/Accordion';

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

const StyledAccordion = styled(Accordion)`
    background-color: #4caf50;
    color: white;
    border-radius: 0px;
    padding: 10px 20px;
    width: 95%;
  `;

  const StyledAccordionHeader = styled(Accordion.Header)`

    background-color: #4caf50;
    color: white;
    font-size: 18px;
  `;

  

function Background(){
return(
<StyledBackground>
   
<StyledAccordion flush>

<Accordion.Item eventKey="0">

<StyledAccordionHeader>
{/*     <Title>About Black History Facts</Title>
 */}    About Black History Facts

    </StyledAccordionHeader>
<Accordion.Body>



In a world where systemic oppression and inequality continue to be major issues, a new app has emerged to tackle one of the most insidious problems of them all. This app is a powerful tool in combating stereotypes and inspiring positive change by highlighting the positive contributions of historically marginalized groups.
<p></p>
The app's developer was inspired to create this app after the passing of laws in the United States making it illegal to teach African American history and denying women the freedom to make their own decisions about their health. This was a clear indication of the systemic oppression still faced by marginalized communities, and the developer felt compelled to do something about it.
<p></p>

The impact of racism in the United States is far-reaching and ongoing, from the transatlantic slave trade to slave codes, medical experimentation, Jim Crow laws, redlining, Cointelpro, the War on Drugs, the crack epidemic, the school-to-prison pipeline, and the devaluation of African-American history. The developer recognized the historical events that contributed to the current state of inequality in the United States, and how race is a social construct that was created to establish white supremacy and justify systemic oppression.
<p></p>

The app recognizes the negative impact of this construct on historically oppressed groups, and seeks to address these issues by shedding light on their positive contributions. By doing so, the app challenges stereotypes and inspires positive change. It is a powerful tool in the fight against systemic racism and one that can make a real difference.
<p></p>

The app's features are impressive and comprehensive. It highlights the positive contributions of historically marginalized groups and provides a platform for underrepresented voices to be heard. It showcases the stories of these groups and empowers individuals to take control of their own narratives. The app encourages people to challenge stereotypes and to break down barriers.
<p></p>

For example, the app may showcase a successful African American entrepreneur who has built a thriving business despite facing discrimination and systemic barriers. By highlighting the individual's success and the challenges they have overcome, the app challenges the stereotype that African Americans are less capable or less successful than their white counterparts. It inspires others to pursue their dreams and to break down barriers to success.
<p></p>

In conclusion, this app is a powerful tool for combating systemic oppression and inequality. By highlighting the positive contributions of historically marginalized groups and challenging stereotypes, it inspires positive change and empowers individuals to take control of their own narratives. The developer's commitment to making a difference in the face of continued oppression aims to inspire, and this app was built to make a real difference in the fight for equality and justice.</Accordion.Body>
</Accordion.Item>
</StyledAccordion>
  

<Title>Learn More</Title>
<Links />
      </StyledBackground>
      );
      }

      export default Background;