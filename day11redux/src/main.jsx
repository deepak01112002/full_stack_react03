import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import {store} from "./Redux/store.js"
import Counter2 from './Components/Counter2.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Counter2/>
  </Provider>,
)
