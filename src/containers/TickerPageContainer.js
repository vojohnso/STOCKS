import React, { Component } from "react";
import { getTickerDetails } from '../services/SenateDBFormatter';
import PageModal from '../components/PageModal'

class TickerPageContainer extends Component {
    state = {
        data: null,
        isPending: true,
        error: false,
    }

    async componentDidMount() {
        if (this.props.match.params.id) {
            const data = await getTickerDetails(this.props.match.params.id);
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
        let tickerPageDetails = null;
        //console.log(data);
        //const transactions = data.transactions;

        if (error) {
            tickerPageDetails = (
                <h3>Oops! Something went wrong trying to load this page!</h3>
            )
        }

        if (isPending) {
            tickerPageDetails = (
                <h3>Loading senator's details now...</h3>
            )
        }
        //console.log(data)   
        // Actually using the data now...
        if (!error && data) {   
            tickerPageDetails = ( 
                <div className='ml-40 mr-40 mt-8'>
                    <div className='text-xl font-bold mt-4 ml-4'>
                        <h1>{data.name}</h1>
                        <div className="flex flex-col bg-white font-mono lg:grid grid-cols-3 gap-8">
                        {data.transactions && data.transactions.map((ticker, i) => (
                            <div className='ticker-preview' key={i}>
                                <h2 className='ticker-senator'>{ticker.senator}</h2>
                                    <h2 className='ticker-transaction-amount'>{ticker.transaction_date}</h2>
                                    <PageModal data={ticker} tickerName={data.ticker}>
                                    </PageModal>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            );
        }
        return <>{tickerPageDetails}</>;
    }
}

export default TickerPageContainer;