import React, { useState } from 'react'
import './SingleDay.scss'
import CandleLight from '../../static/images/lampion-zapalony.svg'
import CandleDark from '../../static/images/lampion-blady.svg'

function SingleDay(props) {
  const [candleLightened, setLightTheCandle] = useState(false)

  const lightTheCandle = () => {
    setLightTheCandle(true)
  }

  const {
    dayDate,
    dayChallenge,
  } = props
  return (
    <div
      className={`single-day ${candleLightened ? 'candle-lightened' : ''}`}
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
  )
}

export default SingleDay
