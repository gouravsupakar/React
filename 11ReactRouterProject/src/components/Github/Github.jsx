import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()


   // 1St way to fetch data

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/gouravsupakar')   // fetching data from github
    //     .then((response) => response.json())
    //     .then((data) => setData(data))
    // }, [])

    return (
         <div className='text-center m-4 bg-gray-500 text-white p-4 text-2xl'>Github userName: {data.login}</div>
    )
}

export default Github



//2nd way to fetch data by using loader and useLoaderData hook

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/gouravsupakar')

    return response.json();
}