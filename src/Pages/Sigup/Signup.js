import React from 'react'

import { useState } from 'react'

import {Link} from 'react-router-dom'

const initialState = {
    FirstName : "",
    LastName : "",
    Email : "",
    Password : "",
    ConfirmPassword : "",
    MobileNumber : "",
    PostalAddress : "",
    OfficialAddress : "",
}


export default function SignUp() {
    
    const [state, setState] = useState(initialState)
    
    const handleChnage = e => {
    
        // console.log(e.target.name)

        // console.log(e.target.value)

        setState({...state, [e.target.name]: e.target.value})
    
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        
        console.log("state => " , state)

    }
    

  return (
    <div className='py-5'>
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div className="card p-2 p-md-3 p-lg-4">
                        <h2 className="text-center mb-4">SignUp Form</h2>
                        <p>Please fill the form to create an account.</p>
                        <form onSubmit={handleSubmit}>

                            <div className="row mb-3">

                                <div className="col">
                                    <input type="text" name="FirstName" placeholder='First Name' className='form-control' onChange={handleChnage} />
                                </div>

                                <div className="col">
                                <input type="text" name='LastName' placeholder='Last Name' className='form-control' onChange={handleChnage} />
                                </div>

                            </div>

                            {/* <div className="row mb-3">
                                <div className="col">
                                    <input type="text" placeholder='Last Name' className='form-control' />
                                </div>
                            </div> */}

                            <div className="row mb-3">
                                <div className="col">
                                    <input type="email" name='Email' placeholder='Enter your email address' className='form-control' onChange={handleChnage}/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    <input type="Password" name='Password' placeholder='Password' className='form-control' onChange={handleChnage} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    <input type="Password" name='ConfirmPassword' placeholder='Confirm Password' className='form-control' onChange={handleChnage} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    <input type="number" name='MobileNumber' placeholder='Mobile Number' className='form-control' onChange={handleChnage} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    <input type="text" name='Postaladdress' placeholder='Postal Address' className='form-control' onChange={handleChnage} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    <input type="text" name='OfficialAddress' placeholder='Official Address(optional)' className='form-control' onChange={handleChnage} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    <button className='btn btn-info w-50 text-white fw-bold'>Sign in</button>
                                </div>
                            </div>

                                <p className='text-center'>Already have an account? &nbsp;<Link to="/Login" href=''>LogIn here</Link> </p>
{/* 
                             <div className='col text-center'>
                                <button className='w-100 btn btn-success fw-bold'>Login</button>
                            </div>  */}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
