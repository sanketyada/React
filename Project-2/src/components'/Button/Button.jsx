import React from 'react'

import styles from './Butoon.module.css'

function Button({text,icon,isOutLine,...rest}) {
  return (
    <button 
      {...rest}
      className={isOutLine ? styles.outlinebtn : styles.primarybtn}>
      {icon}
      {text}
    </button>
  )
}

export default Button
