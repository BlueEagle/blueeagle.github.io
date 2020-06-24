import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './NavBar'
import BioDiv from './BioDiv'

const globalStyleValues = {
  fontColor: '#1F2041',
  lightBlue: '#62A8AC',
  superLightBlue: '#E0FFFF'
}
const { fontColor, superLightBlue } = globalStyleValues

const GloballyStyledDiv = styled.div`
  /* @import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
  font-family: 'Arvo', serif; */
  color: ${fontColor};

  a {
    color: ${fontColor};
    text-decoration: none;
  }

  .bordered-module {
    background: red;
  }
`
const CenteredContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${superLightBlue};
  height: 92vh;
`

function App() {
  

  return (
    <GloballyStyledDiv className="App">
      <Router>
        <NavBar style={globalStyleValues} />
        <CenteredContainerDiv>
          <BioDiv className={"bordered-module"}/>
        </CenteredContainerDiv>
      </Router>
    </GloballyStyledDiv>
  );
}

export default App;