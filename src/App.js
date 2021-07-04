import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './About_Us';
import NotFound from './NotFound';
import ContactUs from './ContactUs';
import SummaryBySenators from './SummaryBySenators';
import SummaryByTickers from './SummaryByTickers';
import SummaryByDays from './SummaryByDays';

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
              <Route path="/About_Us">
                <AboutUs />
              </Route>
              <Route path="/Contact_Us">
                <ContactUs />
              </Route>
              <Route path="/Summary_by_Senators">
                <SummaryBySenators/>
              </Route>
              <Route path="/Summary_by_Tickers">
                <SummaryByTickers />
              </Route>
              <Route path="/Summary_by_Days">
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