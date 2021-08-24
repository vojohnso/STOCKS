import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div 
        className={
            isOpen 
            ? "grid grid-rows-3 text-center items-center bg-yellow-500" 
            : "hidden"
        }
            onClick={toggle}
        >
            <Link className='p-4' to='/'>
             Home
            </Link>
            <Link className='p-4' to='/about_us'>
             About
            </Link>
            <Link className='p-4' to='contact_us'>
             Contact Us
            </Link>
        </div>
    );
};

export default Dropdown
