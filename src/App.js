import React from 'react';
import QuoteDisplay from './components/QuoteDisplay';
import './style.css'
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <QuoteDisplay />
      </main>

  



      <div className="app-footer">

<h2>About Black History Facts</h2>
This app is an important tool in combating the false narrative that links race to positive contributions to society. The developer acknowledges the pervasive nature of systemic racism and how it has been used to oppress marginalized communities. The app recognizes that the social construct of race was created to establish white supremacy and as a justification for systemic oppression. From the transatlantic slave trade to Jim Crow laws, the War on Drugs, the school-to-prison pipeline, and the devaluation of African-American history, the impact of racism in the United States is far-reaching and ongoing. By shedding light on the positive contributions of historically marginalized groups, this app seeks to challenge stereotypes and inspire positive change.        <h3>Learn More</h3>
      
     <small><a href="https://www.si.edu/exhibitions/race-are-we-so-different%3Aevent-exhib-509" target="_blank" rel="noopener noreferrer">"Race: Are We So Different?" exhibit at the Natural History Museum.</a>
</small>

<small><a href="https://nmaahc.si.edu/learn/talking-about-race/topics/historical-foundations-race" target="_blank" rel="noopener noreferrer">The world got along without race for the overwhelming majority of its history.</a>
</small>

<small>
<a href="https://www.scientificamerican.com/article/race-is-a-social-construct-scientists-argue/" target="_blank" rel="noopener noreferrer">Race is a social construct without biological meaning. </a>
</small>

<small>
  <a href="https://www.businessinsider.com/nixon-adviser-ehrlichman-anti-left-anti-black-war-on-drugs-2019-7">Top Nixon adviser reveals the racist reason he started the 'war on drugs' decades ago</a>
</small>
      </div>
<Footer/>
    </div>
  );
}

export default App;