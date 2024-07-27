// src/components/Timeline.js
import React from 'react';
import styled from 'styled-components';



const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimelineEvent = styled.div`
  width: 90%;
  padding: 1rem;
  border-left: 3px solid #000;
  margin: 1rem 0;

  @media (min-width: 600px) {
    width: 70%;
  }
`;

const TimelineDate = styled.div`
  font-weight: bold;
`;

const TimelineSource = styled.div`
  font-style: italic;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding: 1rem;
  
`;

const NavTitle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavLinkItem = styled.li`
  margin: 0.5rem 0;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
`;

const Timeline = () => {
  return (
    <>
      <Nav>
      <NavTitle>
          <li>Timeline: The Fight Against Systemic Racism</li>
        </NavTitle>
        <NavLinks>
          <NavLinkItem><a href="#ancient">Ancient Times</a></NavLinkItem>
          <NavLinkItem><a href="#16th">16th Century</a></NavLinkItem>
          <NavLinkItem><a href="#17th">Late 17th Century</a></NavLinkItem>
          <NavLinkItem><a href="#18th">18th Century</a></NavLinkItem>
          <NavLinkItem><a href="#19th">19th Century</a></NavLinkItem>
        </NavLinks>
      </Nav>

      <main>
        <TimelineContainer>
          <TimelineEvent id="ancient">
            <TimelineDate>Ancient Times</TimelineDate>
            <div className="timeline-content">
              <p><strong>Usage:</strong> Ancient Egyptians used the word "kem" (meaning black) to describe themselves and others with dark skin.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/3Y0HOuM">Snowden, Frank M. Before Color Prejudice: The Ancient View of Blacks. Harvard University Press, 1991.</a>
              </TimelineSource>
              <p><strong>Additional Context:</strong> Ancient and medieval texts from various cultures often described people in terms of skin color. For example, Greek and Roman texts referred to Africans as "Ethiopians" (meaning burnt faces).</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/goldenberg-curse-of-ham">Goldenberg, David M. The Curse of Ham: Race and Slavery in Early Judaism, Christianity, and Islam. Princeton University Press, 2003.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent id="16th">
            <TimelineDate>16th Century</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> The forced transportation of Africans to the Americas, where they were enslaved.</p>
              <p><strong>Impact:</strong> This laid the foundation for systemic racism.</p>
              <TimelineSource>
                Source: <a href="https://openstax.org/books/world-history-volume-2/pages/5-4-the-atlantic-slave-trade">World History Volume 2, from 1400</a>
              </TimelineSource>
              <p><strong>Usage:</strong> European colonizers began to use the term "Black" more systematically to categorize African peoples during the transatlantic slave trade.</p>
              <TimelineSource>
                Source: <a href="https://www.theguardian.com/commentisfree/2015/sep/08/european-racism-africa-slavery">The roots of European racism lie in the slave trade, colonialism – and Edward Long | The Guardian </a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent id="17th">
            <TimelineDate>Late 17th Century</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> Laws in colonial Virginia and Maryland started to delineate rights and privileges based on whether individuals were classified as "White" or "Black."</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/allen-invention-of-white-race">Allen, Theodore W. The Invention of the White Race. Verso Books, 1994.</a>
              </TimelineSource>
              <p><strong>Usage:</strong> The term "White" began to be used more explicitly in English-speaking colonies in North America.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/allen-invention-of-white-race">Allen, Theodore W. The Invention of the White Race. Verso Books, 1994.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent id="18th">
            <TimelineDate>Mid-18th Century</TimelineDate>
            <div className="timeline-content">
              <p><strong>Usage:</strong> The term "Black" became more commonly used in European and American literature and official documents to describe African-descended peoples.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/sweet-recreating-africa">Sweet, James H. Recreating Africa: Culture, Kinship, and Religion in the African-Portuguese World, 1441-1770. University of North Carolina Press, 2003.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent id="18th-century">
            <TimelineDate>18th Century</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> Pseudoscientific theories about race emerged, using terms like "White" and "Black" to categorize people based on physical characteristics and to promote ideas of racial hierarchy.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/gould-mismeasure-of-man">Gould, Stephen Jay. The Mismeasure of Man. W.W. Norton & Company, 1981.</a>
              </TimelineSource>
              <p><strong>Usage:</strong> The concept of "Whiteness" as a racial category solidified in European and American thought.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/eze-race-and-enlightenment">Eze, Emmanuel Chukwudi, ed. Race and the Enlightenment: A Reader. Wiley-Blackwell, 1997.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent id="19th">
            <TimelineDate>19th Century</TimelineDate>
            <div className="timeline-content">
              <p><strong>Usage:</strong> The term "White" became widespread in legal, social, and scientific contexts, reinforcing racial hierarchies and justifying colonialism and slavery.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/gossett-race-history">Gossett, Thomas F. Race: The History of an Idea in America. Oxford University Press, 1997.</a>
              </TimelineSource>
              <TimelineSource>   Source: <a href='https://supreme.justia.com/cases/federal/us/60/393/'>Dred Scott v. Sandford, 60 U.S. 393 (1856)</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>18th-19th Centuries</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> Movement to end the transatlantic slave trade and free enslaved people.</p>
              <p><strong>Impact:</strong> Led to the eventual abolition of slavery.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/davis-problem-of-slavery">Davis, David Brion. The Problem of Slavery in the Age of Revolution, 1770-1823. Oxford University Press, 1999.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>Post-Civil War</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> A system where freed African Americans rented land from landowners and paid rent with a portion of their crops.</p>
              <p><strong>Impact:</strong> Perpetuated economic dependency and poverty among African Americans.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/dubois-black-reconstruction">DuBois, W.E.B. Black Reconstruction in America. Penguin Classics, 1998.</a>
              </TimelineSource>
              <p><strong>Event:</strong> Southern states leased prisoners, predominantly African American, to private industries as laborers.</p>
              <p><strong>Impact:</strong> Created a system of involuntary servitude and exploitation.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/blackmon-slavery-by-another-name">Blackmon, Douglas A. Slavery by Another Name: The Re-Enslavement of Black Americans from the Civil War to World War II. Anchor, 2008.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>Late 19th Century - Mid-20th Century</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> State and local laws enforcing racial segregation in the Southern United States.</p>
              <p><strong>Impact:</strong> Institutionalized racial discrimination.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/woodward-strange-career-of-jim-crow">Woodward, C. Vann. The Strange Career of Jim Crow. Oxford University Press, 1955.</a>
              </TimelineSource>
              <p><strong>Event:</strong> Legal agreements that prohibited the purchase, lease, or occupation of property by a particular group of people, usually African Americans.</p>
              <p><strong>Impact:</strong> Restricted where African Americans could live and contributed to residential segregation.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/rothstein-color-of-law">Rothstein, Richard. The Color of Law: A Forgotten History of How Our Government Segregated America. Liveright Publishing, 2017.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>1916-1970</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> The movement of over six million African Americans from the rural South to urban areas in the North and West.</p>
              <p><strong>Impact:</strong> Sought better economic opportunities and escape from Jim Crow laws, significantly altering the demographics and culture of many cities.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/wilkerson-warmth-of-other-suns">Wilkerson, Isabel. The Warmth of Other Suns: The Epic Story of America's Great Migration. Vintage, 2011.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>1930s Onwards</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> Discriminatory practices by which banks and insurance companies refused or limited loans, mortgages, and insurance within specific geographic areas.</p>
              <p><strong>Impact:</strong> Contributed to racial economic disparity.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/rothstein-color-of-law">Rothstein, Richard. The Color of Law: A Forgotten History of How Our Government Segregated America. Liveright Publishing, 2017.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>1932 - 1972</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> African American men were denied treatment for syphilis to study the progression of the disease.</p>
              <p><strong>Impact:</strong> Exemplifies medical experimentation on African Americans.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/jones-bad-blood">Jones, James H. Bad Blood: The Tuskegee Syphilis Experiment. Free Press, 1993.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>1950s-1960s</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> Organized efforts to end segregation and racial discrimination.</p>
              <p><strong>Impact:</strong> Significant legislative and social changes.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/branch-parting-the-waters">Branch, Taylor. Parting the Waters: America in the King Years 1954-63. Simon & Schuster, 1988.</a>
              </TimelineSource>
              <p><strong>Detail:</strong> Churches played a crucial role in the Civil Rights Movement by organizing protests, providing safe spaces, and mobilizing communities.</p>
              <p><strong>Impact:</strong> Central hubs for planning and support.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/baldwin-legacy-of-mlk">Baldwin, Lewis V. The Legacy of Martin Luther King, Jr.: The Boundaries of Law, Politics, and Religion. University of Notre Dame Press, 2002.</a>
              </TimelineSource>
              <p><strong>Detail:</strong> African Americans organized and joined labor unions to fight for fair wages and working conditions, despite facing discrimination within these organizations.</p>
              <p><strong>Impact:</strong> Contributed to the improvement of labor rights and economic opportunities.</p>
              <TimelineSource>
                Source: <a href="https://www.example.com/foner-organized-labor">Foner, Philip S. Organized Labor and the Black Worker, 1619-1981. International Publishers, 1982.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>1951</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> The cells of Henrietta Lacks, a Black woman, were taken without her consent and used for medical research, leading to significant scientific breakthroughs.</p>
              <p><strong>Impact:</strong> Raised ethical questions about consent and exploitation in medical research.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/462U4wG">Skloot, Rebecca. The Immortal Life of Henrietta Lacks. Crown, 2010.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>1954</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> Landmark Supreme Court case that declared racial segregation in public schools unconstitutional.</p>
              <p><strong>Impact:</strong> Paved the way for integration and the civil rights movement.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/4bEpPgN">Kluger, Richard. Simple Justice: The History of Brown v. Board of Education and Black America's Struggle for Equality. Knopf, 1975.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>1956 - 1971</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> An FBI program aimed at surveilling, infiltrating, discrediting, and disrupting domestic political organizations, notably those advocating for civil rights.</p>
              <p><strong>Impact:</strong> Targeted civil rights leaders and organizations.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/3W2hqxV">Churchill, Ward, and Jim Vander Wall. The COINTELPRO Papers: Documents from the FBI’s Secret Wars Against Dissent in the United States. South End Press, 1990.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>1960s-1970s</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> Policies designed to address historical inequalities in education and employment.</p>
              <p><strong>Impact:</strong> Increased access to opportunities for marginalized groups.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/3zIPw2H">Anderson, Terry H. The Pursuit of Fairness: A History of Affirmative Action. Oxford University Press, 2004.</a>
              </TimelineSource>
              <p><strong>Event:</strong> Implementing busing as a means to integrate schools and reduce racial segregation.</p>
              <p><strong>Impact:</strong> Met with significant resistance, but aimed to provide equal educational opportunities.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/3Y2yFSD">Formisano, Ronald P. Boston Against Busing: Race, Class, and Ethnicity in the 1960s and 1970s. University of North Carolina Press, 2004.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>1964</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> Landmark legislation that outlawed discrimination based on race, color, religion, sex, or national origin.</p>
              <p><strong>Impact:</strong> Major step towards ending segregation and promoting equality.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/4f0U3h4">Loevy, Robert D. The Civil Rights Act of 1964: The Passage of the Law That Ended Racial Segregation. SUNY Press, 1997.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>1965</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> Legislation that aimed to overcome legal barriers preventing African Americans from exercising their right to vote.</p>
              <p><strong>Impact:</strong> Increased voter registration and participation among African Americans.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/3Wl5kRZ">Berman, Ari. Give Us the Ballot: The Modern Struggle for Voting Rights in America. Farrar, Straus and Giroux, 2015.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>1966-1982</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> Revolutionary organization advocating for African American rights and self-defense.</p>
              <p><strong>Impact:</strong> Highlighted issues of police brutality and economic inequality.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/3W48EzJ">Bloom, Joshua, and Waldo E. Martin Jr. Black Against Empire: The History and Politics of the Black Panther Party. University of California Press, 2013.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>1980s Onwards</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> Policies leading to high incarceration rates among African Americans.</p>
              <p><strong>Impact:</strong> Contributed to the school-to-prison pipeline.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/3W71Ocy">Alexander, Michelle. The New Jim Crow: Mass Incarceration in the Age of Colorblindness. The New Press, 2010.</a>
              </TimelineSource>
              <p><strong>Event:</strong> Laws that require judges to impose fixed sentences for specific crimes, often drug-related.</p>
              <p><strong>Impact:</strong> Disproportionately affected African American communities.</p>
              <TimelineSource>
                Source: <a href="https://www.google.com/books/edition/Sentencing_Matters/nU1NJIiL-1wC?hl=en">Tonry, Michael. Sentencing Matters. Oxford University Press, 1996.</a>
              </TimelineSource>
              <p><strong>Event:</strong> Practices that push students, especially those from marginalized communities, out of schools and into the criminal justice system.</p>
              <p><strong>Impact:</strong> Increased incarceration rates among African American youth.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/4bI467J">Heitzeg, Nancy A. The School-to-Prison Pipeline: Education, Discipline, and Racialized Double Standards. Praeger, 2016.</a>
              </TimelineSource>
              <p><strong>Detail:</strong> Higher maternal mortality rates among Black women due to systemic racism in healthcare.</p>
              <p><strong>Impact:</strong> Highlights ongoing health disparities.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/3WkiVJm">Davis, Dána-Ain. Reproductive Injustice: Racism, Pregnancy, and Premature Birth. NYU Press, 2019.</a>
              </TimelineSource>
              <p><strong>Detail:</strong> Analyze the role of cultural representation and media in shaping perceptions of race. Discuss efforts to challenge stereotypes and promote diverse voices.</p>
              <p><strong>Examples:</strong> The impact of television and film portrayals, the role of social media in activism, representation in literature and art.</p>
              <TimelineSource>
                Sources: <a href="https://amzn.to/4eVQA3r">Hall, Stuart. Representation: Cultural Representations and Signifying Practices. Sage Publications, 1997;</a> 
                <TimelineSource>

                </TimelineSource>
                Sources: <a href="https://amzn.to/4cX3ooc">Smith-Shomade, Beretta E. Pimpin' Ain't Easy: Selling Black Entertainment Television. Routledge, 2007.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineDate>2013-Present</TimelineDate>
            <div className="timeline-content">
              <p><strong>Event:</strong> Movement advocating against systemic racism and police violence.</p>
              <p><strong>Impact:</strong> Raised global awareness about racial injustices and sparked widespread protests and policy discussions.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/4f22Gb0">Khan-Cullors, Patrisse, and asha bandele. When They Call You a Terrorist: A Black Lives Matter Memoir. St. Martin's Press, 2018.</a>
              </TimelineSource>
              <p><strong>Detail:</strong> The pandemic disproportionately affected marginalized communities, highlighting existing health and economic disparities.</p>
              <p><strong>Impact:</strong> Increased focus on racial health disparities.</p>
              <TimelineSource>
                Source: <a href="https://jamanetwork.com/journals/jama/fullarticle/2764789">Yancy, Clyde W. "COVID-19 and African Americans." JAMA. 2020.</a>
              </TimelineSource>
              <p><strong>Event:</strong> Campaign advocating for a higher minimum wage, primarily benefiting low-wage workers including many people of color.</p>
              <p><strong>Impact:</strong> Raised awareness of economic inequality and pressured governments and corporations to increase wages.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/3xUA9DK">Rolf, David. The Fight for Fifteen: The Right Wage for a Working America. The New Press, 2016.</a>
              </TimelineSource>
              <p><strong>Event:</strong> Lead contamination of drinking water in Flint, Michigan, disproportionately affecting the predominantly African American population.</p>
              <p><strong>Impact:</strong> Raised awareness about environmental racism and the neglect of marginalized communities.</p>
              <TimelineSource>
                Source: <a href="https://amzn.to/3Y2J68B">Clark, Anna. The Poisoned City: Flint’s Water and the American Urban Tragedy. Metropolitan Books, 2018.</a>
              </TimelineSource>
            </div>
          </TimelineEvent>
        </TimelineContainer>
      </main>

      <Footer>
       {/*  <small><a href="#">Back to Top</a> • <a href="#">Contact</a></small> */}
      </Footer>
    </>
  );
};

export default Timeline;
