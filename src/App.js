import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './containers/Navbar';
import Home from './containers/Home';
import AboutUs from './containers/About_Us';
import NotFound from './containers/NotFound';
import ContactUs from './containers/ContactUs';
import SummaryBySenators from './containers/SummaryBySenators';
import SummaryByTickers from './containers/SummaryByTickers';
import SummaryByDays from './containers/SummaryByDays';
import SenatorPageContainer from './containers/SenatorPageContainer';
import TickerPageContainer from './containers/TickerPageContainer';
import DayPageContainer from './containers/DayPageContainer';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about_us">
                <AboutUs />
              </Route>
              <Route path="/contact_us">  
                <ContactUs />
              </Route>
              <Route path="/summary_by_senators/:id" component={SenatorPageContainer}>
              </Route>
              <Route exact path="/summary_by_senators">
                <SummaryBySenators/>
              </Route>
              <Route path="/summary_by_tickers/:id" component={TickerPageContainer}>
              </Route>
              <Route exact path="/summary_by_tickers">
                <SummaryByTickers />
              </Route>
              <Route path="/summary_by_days/:id+" component={DayPageContainer}>
              </Route>
              <Route exact path="/summary_by_days">
                <SummaryByDays/>
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;