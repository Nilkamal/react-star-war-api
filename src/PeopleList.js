import React from 'react';
import People from './People';

const PeopleList = ({persons}) => {
    const arrayList = persons.map((person, i) => {
        return (
            <People key={i} name={person.name} height={person.height} eye_color={person.eye_color} gender={person.gender} />
        );
    })
    return (
        <div className='tc pa3 mt10 '>
            
          {
              arrayList
          }  
        </div>
    );
}

export default PeopleList;