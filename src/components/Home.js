import React, { Component } from 'react';

class Home extends Component {    
  
  render() {
    return (
      <div className="main-content home slideLeft">
        <p>Hello, I'm Nick - a web developer available for full-time or contract positions.</p>
        <hr />
        <p>I attended The Iron Yard in Charlotte, NC where I studied <a href="img/FrontEnd-JavaScript.pdf" target="_blank">front-end web development</a>. Please see my <a href="img/Nick-Falcone-Resume.pdf" target="_blank">resume</a> for more details.</p>  
        <hr />
      </div>
    );
  }
}

export default Home;