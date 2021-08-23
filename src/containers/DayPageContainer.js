import React, { Component } from "react";
import { getDayDetails } from '../services/SenateDBFormatter';
import PageModal from '../components/PageModal'

class DayPageContainer extends Component {
    state = {
        data: null,
        isPending: true,
        error: false,
    }

    async componentDidMount() {
        if (this.props.match.params.id) {
            const data = await getDayDetails(this.props.match.params.id);
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
        let dayPageDetails = null;
        //console.log(data);
        //const transactions = data.transactions;

        if (error) {
            dayPageDetails = (
                <h3>Oops! Something went wrong trying to load this page!</h3>
            )
        }

        if (isPending) {
            dayPageDetails = (
                <h3>Loading senator's details now...</h3>
            )
        }
        //console.log(data)   
        // Actually using the data now...
        if (!error && data) {  
            dayPageDetails = ( 
                <div className='ticker-page-wrapper'>
                    <div className='ticker-page-name'>
                        <h1>{data[0].transaction_date}</h1>
                        {data && data.map((transaction, i) => (
                            <div className='ticker-preview' key={i}>
                                <h2 className='ticker-senator'>{transaction.senator}</h2>
                                <h2 className='ticker-transaction-amount'>{transaction.amount}</h2>
                                <p className='ticker-transaction-ticker'>{transaction.ticker}</p>
                                <PageModal data={transaction}>
                                </PageModal>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        return <>{dayPageDetails}</>;
    }
}

export default DayPageContainer;