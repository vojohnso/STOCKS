import React, { Component } from "react";
import { getSenatorDetails } from '../services/SenateDBFormatter';
import SenatorPageModal from '../components/SenatorPageModal'

class SenatorPageContainer extends Component {
    state = {
        data: null,
        isPending: true,
        error: false,
    }

    async componentDidMount() {
        if (this.props.match.params.id) {
            const data = await getSenatorDetails(this.props.match.params.id);
            //console.log(data);
            if (data === undefined || data.length === 0) {  //if we don't have any data we want to run the error message!
                this.setState({
                    isPending: false,
                    error: true 
                });
            } else {
                this.setState({
                isPending: false,
                data,
                error: false,
                });
            }
        }
    }
    render() {
        const { data, isPending, error } = this.state;
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
        console.log(data)   
        // Actually using the data now...
        if (!error && data) {  
            senatorPageDetails = ( 
                <div className='senator-page-wrapper'>
                    <div className='senator-page-name'>
                        <h1>{this.props.match.params.id}</h1>
                        {data && data.map((senator, i) => (
                            <div className='senator-preview' key={i}>
                                    <h2 className='senator-transaction-amount'>{senator.transaction_date}</h2>
                                    <b className='senator-transaction-amount'>{senator.amount}</b>
                                    <p className='senator-transaction-ticker'>{senator.ticker}</p>
                                    <SenatorPageModal SenatorData={senator}>
                                    </SenatorPageModal>
                            </div>
                        ))}

                    </div>
                </div>
            );
        }
        return <>{senatorPageDetails}</>;
    }
}

export default SenatorPageContainer;