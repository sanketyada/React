import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
function Sidebar() {

  const [extended, setextended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt,newChat} = useContext(Context);

  const loadPromot = async(prompt)=>{
    setRecentPrompt(prompt)
    onSent(prompt)
  }


  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          onClick={() => setextended((prev) => !prev)}
        />
        <div className="newChat" onClick={newChat}>
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recetTitle">Recents</p>
            {prevPrompt.map((item, idx) => {
              return (
                <div onClick={()=>loadPromot(item)} key={idx} className="recentEntry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
