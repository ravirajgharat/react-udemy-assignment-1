import React from 'react';
import './UserOutput.css';

const output = (props) => {
    return (
        <div className="output">
            <p>User Name : <span>{props.name}</span></p>
            <p>Other Text</p>
        </div>
    );
};

export default output;