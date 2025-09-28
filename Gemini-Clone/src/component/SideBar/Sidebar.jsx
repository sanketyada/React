import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
function Sidebar() {
  const [extended, setextended] = useState(false);
  

  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" src={assets.menu_icon} onClick={()=>setextended((prev)=>!prev)} />
        <div className="newChat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ?
        <div className="recent">
          <p className="recetTitle">Recents</p>
          <div className="recentEntry">
            <img src={assets.message_icon} alt="" />
            <p>What is React ...</p>
          </div>
        </div> :null}
      </div>
      
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ?<p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ?<p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ?<p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
