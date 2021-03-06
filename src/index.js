import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import lang from './hocs/lang/lang.jsx'
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux' 
import thunk from 'redux-thunk'
import rootReducer from './store/reducers'


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
       }) : compose;

// const logger = store => dispatch => action =>{
// 	const result = dispatch(action)
// 	console.log('Logger' , result)
// 	return result
// }    

const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(thunk)
		)
	)
const AppLang = lang(App)

const app = (
	<Provider store = {store}>
		<BrowserRouter>
			<AppLang />
		</BrowserRouter>
	</Provider>
	)
	

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

