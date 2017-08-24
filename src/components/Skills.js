import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import HTML from './skills/HTML';
import CSS from './skills/CSS';
import JavaScript from './skills/JavaScript';

const Skills = ({match}) => (
  <div className="slideRight">
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Skills</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>
    
    <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/html`} /> } />
    <Route path={`${match.path}/html`} component={HTML} />
    <Route path={`${match.path}/css`} component={CSS} />
    <Route path={`${match.path}/javascript`} component={JavaScript} />
  </div>
  </div>
);

export default Skills;