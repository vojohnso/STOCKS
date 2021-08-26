import useFetch from "../services/useFetch"
import { Link } from 'react-router-dom';
import { organizeByTicker } from '../services/SenateDBFormatter';

const SummaryByTickers = () => {
    const {data, isPending, error} = useFetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_ticker_transactions.json')
    const tickerArr = organizeByTicker(data); 
    //console.log(tickerArr);
     
    return (  
        <div className='ml-40 mr-40 mt-8'>
            <div className='text-2xl mb-2 font-mono'>
            <h2>Summary by Tickers</h2>
                <div className='flex flex-col bg-white h-screen font-mono lg:grid grid-cols-3 gap-8 '> 
                    { error && <div>{ error }</div> }
                    { isPending && <div>Loading...</div> }
                    {tickerArr && tickerArr.map((ticker, i) => (
                        <div className='mt-0 bg-white px-2 py-4 rounded-lg shadow-lg text-center' key={i}>
                            <Link to={`/summary_by_tickers/${ticker.ticker}`}>
                                <h2 className='font-mono mb-2 text-lg'>{ticker.name}</h2>
                                <p className='font-mono mb-2 text-sm'>{ticker.transactions.length} transactions</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default SummaryByTickers;