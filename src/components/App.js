import React from 'react';
import  {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        {/*
          switch only renders the first route that matches the URL
          stops searching after found
          if none found, fallback to NotFound component
        */}
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route path='/skills' component={Skills} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;