import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Stocks</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about_us" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>About Us</Link>
          <Link to="/contact_us" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Contact Us</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;