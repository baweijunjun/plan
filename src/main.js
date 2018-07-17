import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import App from './app.jsx'
import 'antd/dist/antd.css'
import './assets/css/app.css'
import {Provider} from 'react-redux';
import store from './store/store.js'
ReactDOM.render(<Provider store={store}><App/></Provider>,document.querySelector('.app'))