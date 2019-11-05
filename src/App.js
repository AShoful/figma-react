import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import outsideClick from './hocs/outsideClick'
import MainPage from './pages/MainPage/MainPage'
import Page404 from './pages/Page404/Page404'
import Footer from './components/Footer/Footer'
import './App.css';

const HeaderOutsideClick = outsideClick(Header)

function App() {
  return (
    <div className="App">
      <HeaderOutsideClick/>
      <div className="pageContent">
        <Switch>
            <Route exact path='/' render = {MainPage} />
            <Route component={Page404} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
