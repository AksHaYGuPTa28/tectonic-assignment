import React from 'react';
import './Container.css';

const Container = ({ header, children }) => {
    return (
        <div className="container">
            <div className='header'>
                {header}
            </div>
            <div className='content'>
                {children}
            </div>
        </div>
    );
};

export default Container;
