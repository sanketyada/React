import React, { use, useState } from "react";

function Rating() {
  let init = () => {
    return 0;
  };
  const [rate, setRate] = useState(false);
  const [countRate, setCountRate] = useState(init);

  let ClikedRate = () => {
    setRate(!rate);
    setCountRate((currValue) => {
      return currValue + 1;
    });
  };
  let style = {
    color: "yellow",
  };
  return (
    <div>
      <p>Rated {countRate} Times</p>
      <p onClick={ClikedRate}>
        {rate ? (
          <i className="fa-solid fa-star" style={style}></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </p>
    </div>
  );
}

export default Rating;
