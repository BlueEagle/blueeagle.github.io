import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './NavBar'

function App() {
  const [globalStyleValues, setGlobalStyleValues] = useState({
    fontColor: '#1F2041',
    lightBlue: '#62A8AC',
    superLightBlue: '#E0FFFF'
  })
  const { fontColor } = globalStyleValues

  const GloballyStyledDiv = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
    font-family: 'Arvo', serif;
    color: ${fontColor};

    a {
      color: ${fontColor};
      text-decoration: none;
    }
  `

  return (
    <GloballyStyledDiv className="App">
      <Router>
        <NavBar style={globalStyleValues}/>
      </Router>
    </GloballyStyledDiv>
  );
}

export default App;
