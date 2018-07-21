import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Switch,
 } from "react-router-dom";

import NavBar from 'components/NavBar'

import Gallery from './routes/Gallery'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App main">
          <NavBar />

          <Switch>
            {/* <Route exact path='/about' component={} /> */}
            {/* <Route exact path='/:artwork' component={} /> */}
            <Route path='/' component={Gallery} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
