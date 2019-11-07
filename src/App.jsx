import React, {Component} from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import Header from './components/Header/Header'
import outsideClick from './hocs/outsideClick'
import {DEFAULT_LANG} from './constants/constants'

import MainPage from './pages/MainPage/MainPage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import AdvantagesPage from './pages/AdvantagesPage/AdvantagesPage'
import DeliveryPage from './pages/DeliveryPage/DeliveryPage'
import Page404 from './pages/Page404/Page404'
import Footer from './components/Footer/Footer'

import getLangRouteParts from './utils/getLangRouteParts'

import './App.css';


const HeaderOutsideClick = outsideClick(Header)

const mapStateToProps = ({ application }) => {
  return {
      lang: application.lang,
      langRoute: application.langRoute
  };
};


// @lang
class App extends Component {
  static propTypes = {
      lang: PropTypes.string,
      langRoute: PropTypes.string
  };

  static defaultProps = {
      langRoute: ''
  };

  renderComponent = Component => ({ match: { params: { lang: langUrl = DEFAULT_LANG }, path }, location: { pathname } }) => {
      if (typeof window === 'undefined') {
          return <Component />;
      }
      const { lang, langRoute } = this.props;
      const { routeWithoutLang } = getLangRouteParts(pathname);
      
      return lang === langUrl ? <Component /> : <Redirect to={`${langRoute}${routeWithoutLang}`} />;
  };

  render () {

    return (
        <div className="App">
          <HeaderOutsideClick/>
          <div className="pageContent">
            <Switch>
                <Route exact path = '/:lang(ru)?' render = {this.renderComponent(MainPage)} />
                <Route exact path = '/:lang(ru)?/products' render = {this.renderComponent(ProductsPage)} />
                <Route exact path = '/:lang(ru)?/delivery' render = {this.renderComponent(DeliveryPage)} />
                <Route exact path = '/:lang(ru)?/about' render = {this.renderComponent(AboutPage)} />
                <Route exact path = '/:lang(ru)?/advantages' render = {this.renderComponent(AdvantagesPage)} />
                <Route exact path = '/:lang(ru)?/contacts' render = {this.renderComponent(ContactsPage)} />
                <Route component={Page404} />
            </Switch>
          </div>
          <Footer />
        </div>
      );
    }
  }


export default withRouter(connect(mapStateToProps)(App));
