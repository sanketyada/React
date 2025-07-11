import React, { useState,useEffect } from 'react'

function UseEffect() {
    let [countx ,SetCountX] = useState(0)
    let [county ,SetCountY] = useState(0)

    let incCountx = ()=>{
        SetCountX((currVal)=>{
            return currVal+1;
        })
    }
    let incCounty = ()=>{
        SetCountY((currVal)=>{
            return currVal+1;
        })
    }
    //normal UseEffect

    // useEffect(()=>{
    //     console.log("I Will Revoke on rendering and rerendering")
    // })
    //UseEffect With Dependencies

    // useEffect(()=>{
    //     console.log("I Will revoke only on count x")
    // },[countx])

    //UesEffect when no any dependencies means Empty Array
    useEffect(()=>{
        console.log("I will revoke only once on rendering ")
    },[])



  return (
    <div>
      <p>Count X = {countx}</p>
      <button onClick={incCountx}>CountX</button>
      <p>Count Y ={county}</p>
      <button onClick={incCounty}>CountY</button>
    </div>
  )
}

export default UseEffect
