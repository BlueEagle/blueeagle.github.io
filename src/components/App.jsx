import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar/>
        </header>
      </Router>
    </div>
  );
}

export default App;
