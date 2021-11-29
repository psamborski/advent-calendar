import React, { useState } from 'react'
import dayjs from 'dayjs'
import './SingleDay.scss'
import CandleLight from '../../static/images/lampion-zapalony.svg'
import CandleDark from '../../static/images/lampion-blady.svg'
import ChallengePopup from '../ChallengePopup/ChallengePopup'

const customParseFormat = require('dayjs/plugin/customParseFormat')

dayjs.extend(customParseFormat)

function SingleDay(props) {
  const {
    dayDate,
    dayChallenge,
  } = props

  // 0 = challenge day is today
  // -1, -2... = challenge will be tomorrow, in 2 days...
  // 1, 2... = challenge was yesterday, 2 days ago...
  const daysDifference = dayjs(dayDate, 'DD.MM')
    .diff(dayjs()
      .startOf('day'), 'days')

  const [candleLightened, setLightTheCandle] = useState(daysDifference < 0)
  const [challengePopupShown, togglePopup] = useState(false)

  const lightTheCandle = () => {
    if (daysDifference === 0 && !candleLightened) {
      setLightTheCandle(true)
      setTimeout(() => togglePopup(true), 700)
    } else if (daysDifference < 0 || candleLightened) {
      togglePopup(true)
    }
  }

  return (
    <>
      {challengePopupShown && (
        <ChallengePopup
          closePopup={() => togglePopup(false)}
          dayChallenge={dayChallenge}
          dayDate={dayDate}
        />
      )}
      <div
        className={`single-day ${candleLightened ? 'candle-lightened' : ''} ${daysDifference === 0 ? 'candle-today' : ''}`}
        onClick={() => lightTheCandle()}
        onKeyDown={() => lightTheCandle()}
        role='button'
        tabIndex={0}
      >
        <div className='candle-container'>
          <img
            alt='candle dark'
            className='candle-dark'
            src={CandleDark}
          />
          <img
            alt='candle lighten'
            className='candle-light'
            src={CandleLight}
          />
        </div>
        <span className='single-day-date'>
          {dayDate}
        </span>
      </div>
    </>
  )
}

export default SingleDay
