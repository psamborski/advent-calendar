import React from 'react'
import './Calendar.scss'
import Week from '../Week/Week'

function Calendar() {
  return (
    <section className='calendar'>
      <div className='calendar-inner'>
        <Week weekNumber={1} />
        <Week weekNumber={2} />
        <Week weekNumber={3} />
        <Week weekNumber={4} />
      </div>
    </section>
  )
}

export default Calendar
