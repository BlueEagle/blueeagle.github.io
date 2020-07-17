import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './NavBar'
import Bio from './Bio'
import BlogPage from './BlogPage';
import ContactPage from './ContactPage';
import ServicesPage from './ServicesPage';

const globalStyleValues = {
  fontColor: '#1F2041',
  lightBlue: '#62A8AC',
  superLightBlue: '#E0FFFF'
}
const { fontColor, superLightBlue } = globalStyleValues

function App() {
  

  return (
    <GloballyStyledDiv className="App">
      <Router>
        <NavBar style={globalStyleValues} />

        <CenteredContainerDiv>
          <Switch>
            <Route path="/contact">
              <ContactPage />
            </Route>

            <Route path="/services">
              <ServicesPage />
            </Route>

            <Route path="/blog">
              <BlogPage />
            </Route>

            <Route path="/">
              <Bio />
            </Route>
          </Switch>
        </CenteredContainerDiv>
      </Router>
    </GloballyStyledDiv>
  );
}

export default App;

const GloballyStyledDiv = styled.div`
  font-family: 'Arvo', serif;
  color: ${fontColor};

  a {
    color: ${fontColor};
    text-decoration: none;
  }
`
const CenteredContainerDiv = styled.div`
  overflow-x: hidden;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${superLightBlue};
  
  @media (max-width: 700px) {
    padding: 0;
  }
`