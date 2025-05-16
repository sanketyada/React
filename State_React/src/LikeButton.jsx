import React, { useState } from "react";

function LikeButton() {
  const [Like, setLike] = useState(false);

  const [click,setClick] = useState(0)

  let toggleBtn = () => {
    setLike(!Like);
    setClick(click+1)
  };
 let style ={color:"red"}
  return (
    <div>
        <p>Number Of Liked: {click}</p>
      <p onClick={toggleBtn}>
        {Like ? <i class="fa-solid fa-heart" style={style}></i> :<i class="fa-regular fa-heart"></i>}
      </p>
    </div>
  );
}

export default LikeButton;
