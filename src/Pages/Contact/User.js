import React, {useState, useEffect} from 'react'

import {users} from '../../data/UserData'

// const initialUser = users

const statuses = ["all", "active", "inactive", "pending"]

export default function User() {

    const [Documents, setDocuments] = useState([])

    const [status, setstatus] = useState("all")

    useEffect(() => {
        
        console.log(users)  

        if(status !== "all"){
        
        let filterDocs = users.filter((users) => {
            return users.status === status
        })
        setDocuments(filterDocs)
    }
    else{
        setDocuments(users)
    }

    }, [status])

  return (
    <div className='py-5 mt-5 bg-light'>
        <div className="container">
            <div className="row">
                <div className="col text-center text-dark fruit">
                    <h1>Users with status {status}</h1>

                    <select className='form-control w-50 mx-auto' onChange={e => {setstatus (e.target.value) }}>
                        {statuses.map((status) => {
                            return <option key={status} value={status}>{status}</option>
                        })}
                    </select>

                    <div className="py-4">

                    {Documents.map((user, i) => {
                            return <li key={i}>Name: <b>{user.name}</b> and status is: <b>{user.status}</b></li>
                        })}

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
