import React from 'react';
import ActivityList from '../data/activities';
import Input from '../components/Input';
import Clock from '../components/Clock';

const List = () => {
  let List = ActivityList.map((activity) => {
    return (
      <li className="project slideUp" key={activity.id}>
        <p>In about {activity.time.toFixed()} minutes, you could <a href={activity.url} target="_blank" rel="noopener noreferrer">{activity.name}</a></p>
      </li>
    );
  }); 
  
  return (
    <div className="main-content">
      <Clock />
      <Input className="main-prompt"/>
      <ul className="group">
        {List}
      </ul>
    </div>
  );
}

export default List;