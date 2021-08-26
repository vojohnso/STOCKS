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
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Sidebar from'./components/Sidebar';
import React, {useState} from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const hideMenu = () =>{
  //     if(window.innerWidth > 768 && isOpen) {
  //       setIsOpen(false);
  //     }
  //   }
  //   window.addEventListener('resize', hideMenu);
  //   return () => {
  //     window.removeEventListener('resize', hideMenu);
  //   } 
  // })
  window.onload=function(){
    const open_btn = document.querySelector('.menu-button');
    const close_btn = document.querySelector('.close-menu');
    const sidebar = document.querySelector('.sidebar');

    open_btn.addEventListener("click", () =>{
      sidebar.classList.toggle("translate-x-full")
    })
    close_btn.addEventListener("click", () =>{
      sidebar.classList.toggle("translate-x-full")
    })
    
  }

  return (
    <div>
    <div className=''>
      <Router>
        <Sidebar/>
        <Navbar toggle ={toggle}/>
        <Dropdown/>
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
      </Router>
      <Footer/>
      </div>
      </div>
  );
}

export default App;