import React from 'react';

const People = ({name, height, eye_color, gender}) => {
    return (
        <div className={`tc dib ma2 pa2 bg-${eye_color} grow shadow-5`} >
            <h2>{name}</h2>
            <p>Height - {height}</p>
            <p>Eye Color - {eye_color}</p>
            <p>Gender - {gender}</p>
        </div>
    );
}

export default People;