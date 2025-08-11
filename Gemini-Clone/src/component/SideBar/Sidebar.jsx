import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
function Sidebar() {
  return (
    <div>
      <div className="top">
        <img className='menu' src={assets.menu_icon} alt="" />
        <div className="newChat">
          <img src={assets.plus_icon} alt="" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p className="recetTitle">Recents</p>
          <div className="recentEntry">
            <img src={assets.message_icon} alt="" />
            <p>What is React</p>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default Sidebar
