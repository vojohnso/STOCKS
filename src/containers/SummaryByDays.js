import useFetch from "../services/useFetch"
import { Link } from 'react-router-dom';
import { organizeByDays } from '../services/SenateDBFormatter';

const SummaryByDays = () => {
    const {data, isPending, error} = useFetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json')
    const dayArr = organizeByDays(data);
    
    return (   
        <div className='ml-40 mr-40 mt-8'>
            <div className="text-2xl mb-2 font-mono">
            <h2>Summary by Days</h2>
            <div className="flex flex-col bg-white h-screen font-mono lg:grid grid-cols-3 gap-8">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {dayArr && dayArr.map((days, i) => (
                <div className='mt-0 bg-white h-24 px-2 py-4 rounded-lg shadow-lg text-center' key={i}>
                    <Link to={`/summary_by_days/${days}`}>
                        <h2 className='days-preview-name'>{days}</h2>
                    </Link>
                </div>
            ))}
            </div>
            </div>
        </div>
    );
}
 
export default SummaryByDays