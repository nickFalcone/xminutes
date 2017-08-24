import React from 'react';
import Skill from './Skill';
import { HTMLCourses } from '../../data/courses';

const HTML = (props) => {
  let skills = HTMLCourses.map((skills) => {
    return <Skill title={skills.title}
                   desc={skills.description}
                   img={skills.img_src}
                   key={skills.id} />
  }); 
  return (
    <div>
      <ul>
        {skills}    
      </ul>
    </div>
  );
}

export default HTML;