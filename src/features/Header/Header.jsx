import React from 'react'
import './Header.scss'
import Foska from '../../static/images/foska.jpg'

function Header() {
  return (
    <section className='header'>
      <div className='header-inner'>
        <h1>
          Kalendarz Adwentowy
          <span> u Jakuba!</span>
        </h1>
        <img
          alt='Foska'
          src={Foska}
        />
      </div>
    </section>
  )
}

export default Header
