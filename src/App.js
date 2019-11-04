import React from 'react';
import Header from './components/Header/Header'
import outsideClick from './hocs/outsideClick'
import MainPage from './pages/MainPage/'
import Footer from './components/Footer/Footer'
import './App.css';

const HeaderOutsideClick = outsideClick(Header)

function App() {
  return (
    <div className="App">
      <HeaderOutsideClick/>
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
