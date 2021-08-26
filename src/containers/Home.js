// import HomeList from "../components/HomeList";
// import useFetch from "../services/useFetch"

// const Home = () => {
//   const {data, isPending, error} = useFetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json')
//   // const source = 'https://senatestockwatcher.com/';
//   // <a href={ source }>Source</a>
//   return (

//           Senate Analytics
//         </h2>
//       </div>
//       { data && <HomeList/>}
//     </div>
    
//   );
// }




import React, { Component } from "react";
import { grabPastThirtyDays, numberOfSenators, topTickers, totalTradeVol } from '../services/GraphicalFormatter';
import NumTransactionsCard from '../components/Homecard/NumTransactionsCard';
import TotalTradeVolumeCard from '../components/Homecard/TotalTradeVolumeCard';
import NumSenatorsCard from '../components/Homecard/NumSenatorsCard';
import TopTickersCard from '../components/Homecard/TopTickersCard';
import ParticlesBg from 'particles-bg'

class Home extends Component {
    state = {
        data: null,
        isPending: true,
        error: false,
    }
    async componentDidMount() {
      const thirtyDays = await grabPastThirtyDays();

      const numTrans = thirtyDays.length;
      const totalVol = totalTradeVol(thirtyDays);
      const senatorCount = numberOfSenators(thirtyDays);
      const tickerList = topTickers(thirtyDays);
      const data = {numTrans, totalVol, senatorCount, tickerList}
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
    render() {
        const { data, isPending, error } = this.state;
        let HomePage = null;
        //console.log(data);

        if (error) {
          HomePage = (
                <h3>Oops! Something went wrong trying to load this page!</h3>
            )
        }

        if (isPending) {
          HomePage = (
                <h3>Loading senator's details now...</h3>
            )
        }
        // Actually using the data now...
        if (!error && data) {
          HomePage = (
          <div className="h-full items-center bg-white-300 mt-10">
          <div className="flex flex-col justify-center items-center">
          <ParticlesBg type="cobweb" bg={true} />
            <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-black mb-14">
            Senate Analytics
            </h2>
            <div className="grid grid-cols-3 gap-4 p-8">
              <NumTransactionsCard numTransactions={data.numTrans}></NumTransactionsCard>
              <TotalTradeVolumeCard total={data.totalVol}></TotalTradeVolumeCard>
              <NumSenatorsCard numSenators={data.senatorCount}></NumSenatorsCard>
            </div>
            <div className="grid grid-cols-1 gap-4">
            <TopTickersCard topTickers={data.tickerList}></TopTickersCard>
            </div>
          </div>
          </div>
          );
        }
      return <>{HomePage}</>
    }
}
export default Home;