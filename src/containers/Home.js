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
import { numberOfTransactions } from '../services/GraphicalFormatter';
import PageModal from '../components/PageModal'

class Home extends Component {
    state = {
        data: null,
        isPending: true,
        error: false,
    }

    async componentDidMount() {
      const data = await numberOfTransactions();
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
        console.log(data)   
        // Actually using the data now...
        if (!error && data) {  
          HomePage = (
          <div className="h-screen items-center bg-white-300 mt-10">
          <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-black mb-14">
            </h2>
          </div>
          </div>
          );
        }
      return <>{HomePage}</>
    }
}
export default Home;