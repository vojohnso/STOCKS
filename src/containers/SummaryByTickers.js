import useFetch from "../services/useFetch"
import { Link } from 'react-router-dom';
import { organizeByTicker } from '../services/SenateDBFormatter';

const SummaryByTickers = () => {
    const {data, isPending, error} = useFetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_ticker_transactions.json')
    const tickerArr = organizeByTicker(data); 
    //console.log(tickerArr);
    
    return (  
        <div className='summary-by-tickers-page'>
            <h2>Summary by Tickers</h2>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {tickerArr && tickerArr.map((ticker, i) => (
                <div className='ticker-preview' key={i}>
                    <Link to={`/summary_by_tickers/${ticker.ticker}`}>
                        <h2 className='ticker-preview-name'>{ticker.name}</h2>
                        <p className='ticker-preview-transcations'>{ticker.transactions.length} transactions</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default SummaryByTickers;