import { Link } from 'react-router-dom';
import { FaUser, FaCalendarDay } from 'react-icons/fa';
import { GoGraph } from "react-icons/go";

const HomeList = () => {
  return (  
    <div className='home-list'>
      <div className='summary-by-senators'>
        <Link to='/summary_by_senators'>
          <h2><FaUser/> Summary by Senators</h2>
        </Link>
      </div>
      <div className='summary-by-tickers'>
      <Link to='/summary_by_tickers'>
        <h2> <GoGraph/> Summary by Tickers</h2>
        </Link>
      </div>
        <div className='summary-by-days'>
      <Link to='/summary_by_days'>
        <h2> <FaCalendarDay/> Summary by Days</h2>
        </Link>
        </div>
    </div>
  );
}
 
export default HomeList;