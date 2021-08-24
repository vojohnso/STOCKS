import { Link } from "react-router-dom";

const Navbar = ({toggle}) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black 
    relative shadow-sm font-mono" 
    role="navigation">
      <Link to='/' className='pl-8 text-2xl'>
        Stocks
      </Link>
      <div className="links"> 
        <div className='px-4 cursor-pointer md:hidden' onClick={toggle}> 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" 
          strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div className='pr-8 md:block hidden'>
          <Link className='p-4 text-xl' to='/'>
            Home
            </Link>
          <Link className='p-4 text-xl' to='/about_us'>
            About
            </Link>
          <Link className='p-4 text-xl' to='contact_us'>
            Contact Us
            </Link>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;