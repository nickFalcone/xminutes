import React from 'react';
import ProjectList from '../data/projects';

const Projects = () => {
  let projects = ProjectList.map((project) => {
    return (
      <li className="project slideUp" key={project.id}>
        <a href={project.url} target="_blank"><img className="project-img" src={project.img_src} alt="project" /></a>
        <a href={project.url} target="_blank"><h3 className="project-title">{project.name}</h3></a>
        <p>{project.description}</p>
        <hr />
      </li>
    );
  }); 
  
  return (
    <div className="main-content">
      <h2>Projects</h2>
      <p>Here are some of my recent projects. Each are live, and most are viewable on GitHhub.</p>
      <ul className="group">
        {projects}    
      </ul>
    </div>
  );
}

export default Projects;