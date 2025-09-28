import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

function Main() {
  const {
    prevPrompt,
    setPrevPrompt,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultdata,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="mainContainer">
        {!showResult ? (
          <>
            {" "}
            <div className="greet">
              <p>
                <span>Hello,Dev</span>
              </p>
              <p>How Can I Help You Today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Here is beautiful places to see on an upcomming road trips
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Here is beautiful places to see on an upcomming road trips
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Here is beautiful places to see on an upcomming road trips
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Here is beautiful places to see on an upcomming road trips
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="resultTitle">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="resultData">
              <img src={assets.gemini_icon} alt="" />
              {loading ? <div className="loader">
                <hr />
                <hr />
                <hr />
              </div> : <p dangerouslySetInnerHTML={{ __html: resultdata }} />
}
            </div>
          </div>
        )}

        <div className="mainBottom">
          <div className="searchBox">
            <input
              type="text"
              placeholder="Enter a Prompt Here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} onClick={() => onSent(input)} />
            </div>
          </div>
          <div className="bottomInfo">
            <p>
              Gemini may display inaccurate info ,including about people, so
              double-check its responses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
