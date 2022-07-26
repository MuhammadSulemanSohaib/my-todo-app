import React, {useContext} from 'react'

import {Link} from "react-router-dom"

import { CountContext } from '../../context/CountContext'

export default function Navbar() {

  const {myName} = useContext(CountContext)

  return (
    <header className="header">
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
      <Link to="/Home" className="navbar-brand" >My Todo App</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/Home" className="nav-link active" >Home</Link>
          </li>
          <li className="nav-item">
            <Link to="About" className="nav-link active" >About</Link>
          </li>
          <li className="nav-item">
            <Link to="Contact" className="nav-link active" >Contact</Link>
          </li>

          <li className="nav-item dropdown">
        <li className="nav-item dropdown">
          <button className="nav-link active dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Hooks
          </button>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to='/hook/useState' className="dropdown-item">useState</Link></li>
            <li><Link to='/hook/useEffect' className="dropdown-item">useEffect</Link></li>
            <li><Link to='hook/useRef' className="dropdown-item">useRef</Link></li>
            <li><Link to='hook/useMemo' className="dropdown-item">useMemo</Link></li>
            <li><Link to='hook/useContext' className="dropdown-item">useContext</Link></li>
            <li><Link to='hook/useReducer' className="dropdown-item">useReducer</Link></li>
          </ul>
        </li>
        </li>

          <li className="nav-item dropdown">
        <li className="nav-item dropdown">
          <button className="nav-link active dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Authentications
          </button>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to='/Login' className="dropdown-item">LogIn</Link></li>
            <li><Link to='/Signup' className="dropdown-item">SignUp</Link></li>
            <li><Link to='' className="dropdown-item">Forgot Password</Link></li>
          </ul>
          </li>
          </li>

          {/* <li className="nav-item">
            <Link to="Login" className="nav-link active" >Log-In / Sign-Up</Link>
          </li> */}
        </ul>
          <p className='text-white mb-0'>Hi, <b>{myName}!</b></p>
      </div>
    </div>
  </nav>
  </header>
    )
}
