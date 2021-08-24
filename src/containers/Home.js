import Footer from "../components/Footer";
import HomeList from "../components/HomeList";
import useFetch from "../services/useFetch"

const Home = () => {
  const {data, isPending, error} = useFetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json')
  // const source = 'https://senatestockwatcher.com/';
  // <a href={ source }>Source</a>
  return (
    <div className="h-screen items-center bg-white-300 mt-10">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <HomeList/>}
    </div>
    
  );
}


export default Home;

