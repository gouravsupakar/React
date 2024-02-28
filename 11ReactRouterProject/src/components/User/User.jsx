import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams();
    console.log(typeof userid);
    let [name, setName] = useState("");

    useEffect(() => typeof userid != "String"? setName(userid) : setName(""), [userid]);


    return (
        <>
        <div className='bg-gray-400 my-4 py-6 text-2xl'>
            User: {userid}
            </div>

            <h1 className='text-xl py-3 pb-6'>Your UserName: {name} </h1>
        </>
    )
}

export default User
