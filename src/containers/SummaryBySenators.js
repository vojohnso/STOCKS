/* eslint-disable no-unused-expressions */
import { Link } from 'react-router-dom';
import { getSenatorID, getSummaryDetails } from '../services/SenateDBFormatter';
import React, { Component } from "react";
import { BASE_CONGRESS_IMAGE_PATH } from '../constants/Constants'

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

        if (!error && senatorData) {  
            senatorPageDetails = (
                <div className='ml-40 mr-40 mt-8'>
                    <h2 className='text-2xl mb-2 font-mono'>Summary by Senators</h2> 
                        <div className='flex flex-col bg-white h-screen font-mono lg:grid grid-cols-3 gap-8 '>
                        { error && <div>{ error }</div> }
                        { isPending && <div>Loading...</div> }
                        {senatorData && senatorData.map((senator, i) => (
                        <div className='mt-0 bg-white px-2 py-4 rounded-lg shadow-lg text-center' key={i}>
                            <Link to={`/summary_by_senators/${senator}`}>
                            <img className='inline-block justify-center h-40 w-36 overflow-hidden object-cover rounded-full border-2 mb-5 shadow' 
                                src={`${BASE_CONGRESS_IMAGE_PATH}${senatorID[senator]}.jpg`} 
                                alt='Congressional Senator' 
                                onError={e => {
                                    e.onerror = null
                                    e.target.src='https://senatestockwatcher.com/static/media/placeholder.157f088b.png'}
                                    }></img>
                                <h2 key={i} className='font-mono mb-2'>{senator}</h2>
                            </Link>
                        </div>
                        ))}
                        </div>
                </div>
            )
        }
        return <>{senatorPageDetails}</>;
    }
}

export default SummaryBySenators; 