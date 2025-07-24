import React from 'react'
import './Button.css'
function Button({text,icon,isOutine,...rest}) {
  return (
    <div>
      <button 
      {...rest}
      className={`${isOutine ? 'btnn' : 'btn'}`}>
        {text}
        {icon}
      </button>
    </div>
  )
}

export default Button
