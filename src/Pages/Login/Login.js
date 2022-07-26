import React, {useState} from 'react'

import {Link} from "react-router-dom"


export default function Login() {

    const [userName, setUserName] = useState("")

    const [Password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(userName)
        console.log(Password)
    }

  return (
    <div className='py-5'>
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div className="card p-2 p-md-3 p-lg-4">
                        <h2 className="text-center mb-4">Login Form</h2>
                        <form onSubmit={handleSubmit}>

                            <div className="row mb-3">
                                <div className="col">
                                    <input type="text" placeholder='Enter your username' className='form-control' onChange={(e) => {setUserName(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    <input type="Password" placeholder='Password' className='form-control' onChange={(e) => {setPassword(e.target.value)}} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col text-center">
                                    <button className='btn btn-success w-50 fw-bold'>Log in</button>
                                </div>
                            </div>

                            <p className='text-center'>Not a member? <Link to="/Signup">SignUp here</Link></p>


                            {/* <div className='col'>
                                <a href='#' className='forgot'>Forgot Password?</a>
                            </div> */}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
