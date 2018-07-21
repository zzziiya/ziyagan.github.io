import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Switch,
 } from "react-router-dom";

import NavBar from 'components/NavBar'

import Gallery from './routes/Gallery'
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />

          <div className='main'>
            <Switch>
              {/* <Route exact path='/about' component={} /> */}
              {/* <Route exact path='/artwork/:artwork' component={} /> */}
              <Route path='/' component={Gallery} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
