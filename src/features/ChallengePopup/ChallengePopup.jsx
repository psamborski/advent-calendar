import React from 'react'
import './ChallengePopup.scss'
import Holly from '../../static/images/holly.jpg'

function ChallengePopup(props) {
  const {
    closePopup,
    dayChallenge,
    dayDate,
  } = props

  return (
    <div className='challenge-popup'>
      <div className='challenge-container'>
        <div className='challenge-inner'>
          <span
            className='close-sign'
            onClick={() => closePopup()}
            onKeyDown={() => closePopup()}
            role='button'
            tabIndex={0}
          >
            ×
          </span>
          <div className='challenge-text-container'>
            <h3>
              Challenge na
              {' '}
              {dayDate}
            </h3>
            <p dangerouslySetInnerHTML={{ __html: dayChallenge }} />
            <img
              alt='Holly'
              className='holly-image'
              src={Holly}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChallengePopup
