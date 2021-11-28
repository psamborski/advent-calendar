import React from 'react'
import './Week.scss'
import challenge from '../../helpers/challenge'
import SingleDay from '../SingleDay/SingleDay'

function Week(props) {
  const getWeek = (weekNumer) => challenge?.weeks?.[weekNumer] || {}

  const { weekNumber } = props

  const currentWeek = getWeek(weekNumber)

  return (
    <div className='week'>
      <h2>{currentWeek?.title || `Tydzień ${weekNumber}`}</h2>
      <div className='days-container'>
        {(Object.entries(currentWeek?.days || [])).map(
          ([dayDate, dayChallenge]) => (
            <SingleDay
              key={`week-${weekNumber}-day-${dayDate}`}
              dayChallenge={dayChallenge}
              dayDate={dayDate}
            />
          ),
        )}
      </div>
    </div>
  )
}

export default Week
