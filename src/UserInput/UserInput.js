import React from 'react';
import './UserInput.css';

const input = (props) => {
    return (
        <div className="input_div">
            <span>User Input : </span>
            <input 
                type="text" 
                className="input" 
                placeholder="Name" 
                onChange={props.changed} 
                value={props.currentName} 
            />
        </div>
    );
};

export default input;