import useFetch from "../services/useFetch"
import { Link } from 'react-router-dom';
import { organizeByDays } from '../services/SenateDBFormatter';

const SummaryByDays = () => {
    const {data, isPending, error} = useFetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json')
    const dayArr = organizeByDays(data);
    
    return (  
        <div className='summary-by-tickers-page'>
            <h2>Summary by Days</h2>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {dayArr && dayArr.map((days) => (
                <div className='days-preview' key={days.id}>
                    <Link to={`/summary_by_days/${days}`}>
                        <h2 className='days-preview-name'>{days}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
 
export default SummaryByDays