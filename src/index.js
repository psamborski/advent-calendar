import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import WholeCalendarContainer from './features/WholeCalendarContainer/WholeCalendarContainer'
import reportWebVitals from './reportWebVitals'
import Loader from './features/Loader/Loader'

ReactDOM.render(
  <React.StrictMode>
    <Loader />
    <WholeCalendarContainer />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
