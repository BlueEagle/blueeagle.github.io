import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './NavBar'
import Bio from './Bio'

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
          <Bio />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${superLightBlue};
`