import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/index'
// const reducer = lazy(()=>import('./redux/index'))
import 'antd/dist/antd.css'
import { createBrowserHistory } from "history"
const {Api} = require('./public/util')
console.log(Api)
const history = createBrowserHistory();
const store = createStore(reducer)
window.Maxios = Api
ReactDOM.render((<Router history={history}><Provider store={store}><App/></Provider></Router>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
