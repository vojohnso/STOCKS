import React from "react";
import { getSenatorDetails, setSenatorPopUp } from '../services/SenateDBFormatter';
import Button from '@material-ui/core/Button';
import PopUpSenatorPage from '../components/PopUpSenatorPage'
import SenatorPageModal from '../components/SenatorPageModal'

//                              <Link to={`/summary_by_senators/${senator.id}`}>
{/* <PopUpSenatorPage trigger={this.state.buttonPopup[i]}>
<h3>Details of </h3>
</PopUpSenatorPage> */}
class SenatorPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isPending: true,
            error: false,
            buttonPopup: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (id) => {
        var senatorData = this.state.buttonPopup;
        console.log(senatorData[id]);
        if (this.state.buttonPopup[id]==false) {
            senatorData[id]=true;
        }
        else {
            senatorData[id]=false;
        }
        this.setState({
            buttonPopup: senatorData
        })
    }

    async componentDidMount() {
        if (this.props.match.params.id) {
            const full_data = await getSenatorDetails(this.props.match.params.id);
            
            const data = full_data[0];
            const buttonPopup = full_data[1];
            //console.log(data);
            if (data === undefined || data.length === 0) {  //if we don't have any data we want to run the error message!
                this.setState({
                    isPending: false,
                    error: true 
                });
            } else {
                console.log(buttonPopup);
                this.setState({
                isPending: false,
                data,
                error: false,
                buttonPopup 
                });
            }
        }
    }
    render() {
        const { data, isPending, error, buttonPopup } = this.state;
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