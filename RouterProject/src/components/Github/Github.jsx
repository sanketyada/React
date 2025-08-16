import React, { useEffect, useState } from 'react'
  import { useLoaderData } from 'react-router-dom';
function Github() {
    let data =useLoaderData()
    // let [data,setData] =useState('')
    // let ApiCall =async()=>{
    //     let res =await  fetch("https://api.github.com/users/sanketyada");
    //     let data = await res.json()Router
    //     setData(data)

    // }
    // useEffect(()=>ApiCall,[])
  return (
    <div className='bg-gray-500 text-center'>
      <h1>Github Portfolio</h1>
      <p>Followes:{data.followers}</p>
      <img className="mx-auto my-6 w-50 " src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export  const githubApiData = async()=>{
    let res = await fetch("https://api.github.com/users/sanketyada")
    return res.json();
}
