import React, { useState } from "react";

import styled from "styled-components";
function Numberselector({error,setError,selectNumber, setSelectedNumber}) {



  const arrNumber = [1, 2, 3, 4, 5, 6];
  
  const numberselectorHandler=(val)=>{
    setSelectedNumber(val);
    setError("")
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((val, index) => (
          <Box
            isselected={val === selectNumber}
            onClick={() => {
              numberselectorHandler(val);
            }}
            key={index}
          >
            {val}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default Numberselector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  text-align: center;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
`;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;

  .flex{
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    font-weight: 700px;
  }
  .error{
    color: red;
  }
`;
