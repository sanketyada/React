import React from 'react'
import styles from './Navigation.module.css'
function Navigation() {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className='logo'>
        <img src="/images/logo.png" alt="do some things Logo" />
      </div>
      <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
