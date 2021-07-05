import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import { organizeBySenator } from './SenateDBFormatter';

const SummaryBySenators = () => {
    const {data, isPending, error} = useFetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json')
    const senatorArr = organizeBySenator(data);
    
    return (  
        <div className='summary-by-senators-list'>
            <h2>Summary by Senators</h2>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {senatorArr && senatorArr.map((senator) => (
                <div className='senator-preview' key={senator.id}>
                    <Link to={`/summary_by_senators/${senator}`}>
                        <h2 className='senator-preview-name'>{senator}</h2>
                    </Link>
                </div>
            ))}
  
            {/* {data && data.map((transaction) => (
                <div className="senator-preview" key={transaction.id}>
                    <Link to={`/senator/${transaction.senator}`}>
                        <h2 className='summary-by-senators-temp'>{transaction.ticker}</h2>
                        <p>Purchased by {transaction.senator}</p>
                    </Link>
                </div>
            )) */
            }
        </div>
    );
}
 
export default SummaryBySenators; 