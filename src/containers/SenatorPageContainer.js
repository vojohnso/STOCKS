import React, { Component } from "react";
import { getSenatorDetails } from '../services/SenateDBFormatter';
import PageModal from '../components/PageModal'

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
        //console.log(data);

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
                        <h1 class="text-xl font-bold mt-4 ml-4 ">Transaction Details for {this.props.match.params.id}</h1>
                            <div class="flex flex-col bg-white h-screen font-mono lg:grid grid-cols-3 gap-8">
                            {data && data.map((senator, i) => (
                                <div className='senator-preview' key={i}>
                                        <h2 className='senator-transaction-amount'>{senator.transaction_date}</h2>
                                        <b className='senator-transaction-amount'>{senator.amount}</b>
                                        <p className='senator-transaction-ticker'>{senator.ticker}</p>
                                        <PageModal data={senator}>
                                        </PageModal>
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