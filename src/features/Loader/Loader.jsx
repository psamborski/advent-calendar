import React from 'react'
import './Loader.scss'

function Loader() {
  return (
    <div className='loader-container'>
      <div className='tree'>
        <svg viewBox='0 0 120 140'>
          <polygon
            className='p'
            fill='none'
            points='60,10 10,110 110,110 '
            strokeWidth='1'
          />
          <circle
            className='c c1'
            cx='30'
            cy='100'
            fill='none'
            r='4'
            strokeWidth='1'
          />
          <circle
            className='c c2'
            cx='65'
            cy='40'
            fill='none'
            r='4'
            strokeWidth='1'
          />
          <circle
            className='c c3'
            cx='90'
            cy='90'
            fill='none'
            r='4'
            strokeWidth='1'
          />
          <circle
            className='c c4'
            cx='50'
            cy='60'
            fill='none'
            r='4'
            strokeWidth='1'
          />
          <circle
            className='c c5'
            cx='69'
            cy='102'
            fill='none'
            r='4'
            strokeWidth='1'
          />
          <circle
            className='c c6'
            cx='45'
            cy='80'
            fill='none'
            r='4'
            strokeWidth='1'
          />
          <circle
            className='c c7'
            cx='75'
            cy='70'
            fill='none'
            r='4'
            strokeWidth='1'
          />
        </svg>
      </div>
    </div>
  )
}

export default Loader
