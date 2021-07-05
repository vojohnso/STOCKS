import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './About_Us';
import NotFound from './NotFound';
import ContactUs from './ContactUs';
import SummaryBySenators from './SummaryBySenators';
import SummaryByTickers from './SummaryByTickers';
import SummaryByDays from './SummaryByDays';
import SenatorPageContainer from './SenatorPage';

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
              <Route path="/summary_by_tickers">
                <SummaryByTickers />
              </Route>
              <Route path="/summary_by_days">
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