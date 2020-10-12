import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import VendingMachine from './Components/VendingMachine';
import Sardines from './Components/Sardines';
import Soda from './Components/Soda';
import Chips from './Components/Chips';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/sardines" component={Sardines} />
          <Route exact path="/soda" component={Soda} />
          <Route exact path="/chips" component={Chips} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
