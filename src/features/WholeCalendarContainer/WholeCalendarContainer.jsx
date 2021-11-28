import React from 'react'
import './WholeCalendarContainer.scss'
import Header from '../Header/Header'
import Calendar from '../Calendar/Calendar'

function WholeCalendarContainer() {
  return (
    <div className='page-container'>
      <div className='calendar-container'>
        <Header />
        <Calendar />
      </div>
    </div>
  )
}

export default WholeCalendarContainer
