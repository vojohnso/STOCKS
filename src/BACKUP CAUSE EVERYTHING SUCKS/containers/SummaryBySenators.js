import { Component } from 'react';
import useFetch from '../services/useFetch';
import { Link } from 'react-router-dom';
import { organizeBySenator, getSenatorID } from '../services/SenateDBFormatter';

class SummaryBySenators extends Component {
    state = {
        data: null,
        isPending: true,
        error: false
    }

    async componentDidMount() {
        const senatorArr = await(organizeBySenator())
        const senatorHash = await(getSenatorID)

    }

}

const SummaryBySenators = () => {
    const {data, isPending, error} = useFetch()
    const senatorArr = organizeBySenator(data);
    getSenatorID().then(res => {
        // console.log(res)
        const senatorHash = [];
        // console.log(senatorHash);
        for (var i in senatorArr) {
            for (var j in res) {
                if (senatorArr[i] === j) {
                    senatorHash.push(res[j]);
                }
            }
        }
    });
    console.log(senatorHash);
    
    return (
        <div className='summary-by-senators-list'>
            <h2>Summary by Senators</h2>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {senatorArr && senatorArr.map((senator) => (
                <div className='senator-preview' key={senator.id}>
                    <Link to={`/summary_by_senators/${senator}`}>
                        <h2 className='senator-preview-name'>{senator}</h2>
                        <img src={`https://theunitedstates.io/images/congress/450x550/S001217.jpg`} alt={`Senator photo of ${senator}`} />
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default SummaryBySenators; 