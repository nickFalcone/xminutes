import React from 'react';
import Skill from './Skill';
import { JSCourses } from '../../data/courses';

const JavaScript = (props) => {
  let skills = JSCourses.map((skills) => {
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

export default JavaScript;