import React from 'react';
import Skill from './Skill';
import { CSSCourses } from '../../data/courses';

const CSS = (props) => {
  let skills = CSSCourses.map((skills) => {
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

export default CSS;