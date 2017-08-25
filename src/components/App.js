import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

import About from './About';
import Activities from './Activities';
// import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">

      <Switch>
        <Route exact path='/about' component={About} />
        {/* <Route component={NotFound} /> */}
      </Switch>
      <NavLink to="/about">What's this?</NavLink>
      <Activities />
    </div>
  </BrowserRouter>
);

export default App;