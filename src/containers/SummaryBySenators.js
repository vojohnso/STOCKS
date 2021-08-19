/* eslint-disable no-unused-expressions */
import useFetch from '../services/useFetch';
import { Link } from 'react-router-dom';
import { organizeBySenator } from '../services/SenateDBFormatter';


const SummaryBySenators = () => {
    const {data, isPending, error} = useFetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions_for_senators.json')
    const senatorArr = organizeBySenator(data);
    return (
        <div className='summary-by-senators-list'>
            <h2>Summary by Senators</h2>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {senatorArr && senatorArr.map((senator) => (
                <div className='senator-preview' key={senator.id}>
                    <Link to={`/summary_by_senators/${senator}`}>
                        <h2 key={senator.id} className='senator-preview-name'>{senator}</h2>
                        
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default SummaryBySenators; 