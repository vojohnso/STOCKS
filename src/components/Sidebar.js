import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCalendarDay } from 'react-icons/fa';
import { GoGraph } from "react-icons/go";

const Sidebar = () => {
    return (
        <nav class="sidebar fixed transform translate-x-full transition duration-500 ease-in-out bg-gray-900 top-0 right-0 z-10 md:block hidden text-white w-72 h-screen shadow-lg px-1.5 py-8">
        <div class="flex flex-col flex justify-between">
            <div class="flex flex-row">
                <button class="close-menu p-2 mt-6 focus:outline-none focus:bg-gray-800 hover:bg-gray-800">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                <div class="mt-8 ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    class="h-6 w-6" fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                </div>

            <span class="text-lg font-extrabold px-2 mt-8">SENATE STOCKERS</span>
            </div>
            <div class="bg-white h-1 w-full"></div>
                <div class="nav-items mt-10">
                    <Link className="block font-bold text-center text-lg py-3 hover:bg-purple-600 rounded transition duration-200 hover:shadow-lg" to='/'>Home</Link>
                    <Link className="block font-bold text-center text-lg py-3 hover:bg-purple-600 rounded transition duration-200 hover:shadow-lg" to='/about_us'>About</Link>
                    <Link className="block font-bold text-center text-left text-lg py-3 hover:bg-purple-600 rounded transition duration-200 hover:shadow-lg" to='contact_us'>Contact Us</Link>
                    <div class="bg-gray-900 h-60"></div>
                    <Link className="flex justify-center" to='/summary_by_senators'>
                        <button class="bg-red-500 text-lg hover:bg-red-700 text-white transition duration-200 font-bold py-2 w-11/12 rounded ">
                        Summary by Senators</button> 
                    </Link>
                    <div class="bg-gray-900 h-2 w-full"></div>
                    <Link className="flex justify-center" to='/summary_by_tickers'>
                    <button class="my-3 text-lg bg-red-500 hover:bg-red-700 text-white transition duration-200 font-bold py-2 w-11/12 rounded">
                        Summary by Tickers</button> 
                    </Link>
                    <div class="bg-gray-900 h-2 w-full"></div>
                    <Link className="flex justify-center" to='/summary_by_days'>
                    <button class="bg-red-500 text-lg hover:bg-red-700 text-white transition duration-200 font-bold py-2 w-11/12 rounded">
                        Summary by Days</button> 
                    </Link>
                    <div class="bg-white h-1 mt-2"></div>
                </div>
                <div class="bg-gray-900 h-48"></div>
                <div class="footer flex flex-row justify-evenly mx-6">
                    <a href="https://senatestockwatcher.com/" class="text-red-500 font-bold text-center">Source</a>
                    <a href="https://github.com/vojohnso/stocks" class="text-red-500 font-bold text-center">Github</a>
                    <a href="https://www.netlify.com/" class="text-red-500 font-bold " >Host: Netlify</a>
                </div>
                </div>
        </nav>
    );
};

export default Sidebar
