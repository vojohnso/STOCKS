import HomeList from "../components/HomeList";
import useFetch from "../services/useFetch"
import { Link } from 'react-router-dom';

const Home = () => {
  const {data, isPending, error} = useFetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json')
  const source = 'https://senatestockwatcher.com/';
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <HomeList/>}
      <div className='home-source-link'>
        <Link to={ source }>Source</Link>
      </div>
    </div>
  );
}
 
export default Home;