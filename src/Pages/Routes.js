import React from 'react'

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "../Components/Header"

import Footer from "../Components/Footer"

import Home from "./Home"

import About from "./About"

import Contact from "./Contact"

import Login from "./Login"

import Signup from "./Sigup"

import NoPage from "../Pages/NoPage"

import UseRef from './Hooks/UseRef'

import UseMemo from './Hooks/UseMemo'

import UseContext from './Hooks/UseContext'

import UseReducer from './Hooks/UseReducer'

export default function CustomRoutes() {
  return (
    <BrowserRouter>

    <Header />

    <main>
        <Routes>

            <Route path='/Home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} /> 
            <Route path='/hook/useRef' element={<UseRef/>} />
            <Route path='/hook/useMemo' element={<UseMemo />} />
            <Route path='/hook/useContext' element={<UseContext />} />
            <Route path='hook/useReducer' element={<UseReducer />} />

              <Route path='*' element={<NoPage />} />

        </Routes>
    </main>

    <Footer />

    </BrowserRouter>
  )
}
