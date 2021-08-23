/* eslint-disable no-unused-expressions */
import { Link } from 'react-router-dom';
import { getSenatorID, getSummaryDetails } from '../services/SenateDBFormatter';
import React, { Component } from "react";
import { BASE_CONGRESS_IMAGE_PATH, ALT_CONGRESS_IMAGE_PATH } from '../constants/Constants'

class SummaryBySenators extends Component {
    state = {
        senatorData: null,
        isPending: false,
        error: false,
        senatorID: null
    }

async componentDidMount() {
    const senatorData = await getSummaryDetails();
    const senatorID = await getSenatorID(senatorData);
    if (senatorData === undefined || senatorData.length === 0) {
        this.setState({
            isPending: false,
            error: true 
        });
    } else {
        this.setState({
            senatorData,
            isPending: false,
            error: false,
            senatorID
            })
        }
    }
    render() {
        const { senatorData, isPending, error, senatorID } = this.state;
        let senatorPageDetails = null;

        if (error) {
            senatorPageDetails = (
                <h3>Oops! Something went wrong trying to load this page!</h3>
            )
        }

        if (isPending) {
            senatorPageDetails = (
                <h3>Loading senator's details now...</h3>
            )
        }
        console.log(senatorData);
        console.log(senatorID);

        if (!error && senatorData) {  
            senatorPageDetails = ( 
                <div className='senator-page-wrapper'>
                    <div className='summary-by-senators-list'></div>
                        <h2>Summary by Senators</h2>
                        { error && <div>{ error }</div> }
                        { isPending && <div>Loading...</div> }
                        {senatorData && senatorData.map((senator, i) => (
                        <div className='senator-preview' key={i}>
                            <Link to={`/summary_by_senators/${senator}`}>
                                <h2 key={i} className='senator-preview-name'>{senator}</h2>
                                <img class='225x275-senator-rounded-img' 
                                src={`${BASE_CONGRESS_IMAGE_PATH}${senatorID[senator]}.jpg`} 
                                alt='Congressional Photo of Senator' 
                                onError={e => {
                                    e.onerror = null
                                    e.target.src='https://lh3.googleusercontent.com/ZgRbFptUzuFwwLzlnhjP6YCw29iFonExP4D6WenmP3iP6sFw5d5wgj01zjz15HpcUDmY=s85'}}></img>
                            </Link>
                    </div>
                    ))}
                </div>
            )
        }
        return <>{senatorPageDetails}</>;
    }
}
// const SummaryBySenators = () => {
//     const {data, isPending, error} = useFetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions_for_senators.json')
//     const senatorID = getSenatorID()
//     const senatorArr = organizeBySenator(data);
//     return (
//         <div className='summary-by-senators-list'>
//             <h2>Summary by Senators</h2>
//             { error && <div>{ error }</div> }
//             { isPending && <div>Loading...</div> }
//             {senatorArr && senatorArr.map((senator, i) => (
//                 <div className='senator-preview' key={i}>
//                     <Link to={`/summary_by_senators/${senator}`}>
//                         <h2 key={senator.id} className='senator-preview-name'>{senator}</h2>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// }
 
export default SummaryBySenators; 