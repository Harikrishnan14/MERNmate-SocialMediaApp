import React from 'react'
import './LogoSearch.css'
import Logo from '../../img/logo.png'
import { UilSearch } from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
      <img src={Logo} alt='' />
      <div className="search">
        <input type='text' placeholder='#Explore' />
        <div className="search-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
