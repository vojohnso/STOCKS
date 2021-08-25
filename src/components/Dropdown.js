import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div 
        className={
            isOpen 
            ? "grid grid-rows-3 text-center items-center bg-gray-900 pb-2" 
            : "hidden"
        }
            onClick={toggle}
        >
            <Link className='mt-1 py-2 text-white font-semibold hover:bg-gray-800 rounded' to='/'>
             Home
            </Link>
            <Link className='mt-1 py-2 text-white font-semibold hover:bg-gray-800 rounded' to='/about_us'>
             About
            </Link>
            <Link className='mt-1 py-2 text-white font-semibold hover:bg-gray-800 rounded' to='contact_us'>
             Contact Us
            </Link>
        </div>
    );
};

export default Dropdown
