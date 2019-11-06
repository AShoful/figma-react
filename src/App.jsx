import React, {Component} from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import Header from './components/Header/Header'
import outsideClick from './hocs/outsideClick'
import lang from './hocs/lang/lang.jsx';
import {DEFAULT_LANG} from './constants/constants'
import MainPage from './pages/MainPage/MainPage'
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
      console.log(routeWithoutLang)

      return lang === langUrl ? <Component /> : <Redirect to={`${langRoute}${routeWithoutLang}`} />;
  };

  render () {
      console.log(this.props)
    return (
        <div className="App">
          <HeaderOutsideClick/>
          <div className="pageContent">
            <Switch>
                <Route exact path = '/' render = {this.renderComponent( MainPage, lang)} />
                <Route exact path = '/products' render = {this.renderComponent( Page404, lang)} />
                <Route component={Page404} />
            </Switch>
          </div>
          <Footer />
        </div>
      );
    }
  }


export default withRouter(connect(mapStateToProps)(App));
