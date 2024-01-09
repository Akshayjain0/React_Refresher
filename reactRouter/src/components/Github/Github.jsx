import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data , setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/akshayjain0')
    //     .then((res)=> res.json())
    //     .then((data)=> setData(data))
    // })
  return (
    <>
    <div className='bg-gray-600 text-white text-3xl p-4 text-center'>Github User Name: {data.login}</div>
    <div className='bg-gray-600 text-white text-3xl p-4 text-center'>Github Followers: {data.followers}</div>
    </>
  )
}

export default Github
export const gitHubDataFetch = async ()=>{
    const response = await fetch('https://api.github.com/users/akshayjain0')
    return response.json()
}