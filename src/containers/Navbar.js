import { Link } from "react-router-dom";

const Navbar = ({toggle}) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-gray-900 text-black 
    relative shadow-sm font-mono" 
    role="navigation">
      <Link to='/' className='antialiased pl-8 text-2xl text-bold text-white p-4'>
        Senate Stockers
      </Link>
      <div className="links flex"> 
      <div class="block hidden">onClick={toggle}
        <div className='md:block hidden'>
          <Link class='p-4 text-xl bg-purple-700 pb-5 pt-5 rounded-b-lg text-white hover:bg-indigo-400 hover:shadow-lg transition duration-200' to='/'>
            Home
            </Link>
          <Link class='p-4 text-xl text-white hover:bg-gray-800 rounded hover:shadow-lg transition duration-200' to='/about_us'>
            About
            </Link>
          <Link class='p-4 text-xl text-white hover:bg-gray-800 rounded hover:shadow-lg transition duration-200' to='contact_us'>
            Contact Us
            </Link>
        </div>
      </div>
        <button className='menu-button px-2.5 cursor-pointer text-white'> 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" 
          strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>  
        </button>
      </div>
    </nav>
  );
}
 
export default Navbar;