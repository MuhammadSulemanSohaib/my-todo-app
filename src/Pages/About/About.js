// Hooks 

import React, {useState, useEffect, useContext} from 'react'

import {CountContext} from "../../context/CountContext"

export default function ButtonColor() {
  
    const {myName, count} = useContext(CountContext)

    const [color, setColor] = useState("warning")


    useEffect(() => {
      console.log("useEffect is working and the color is " + color)
    }, [color])

  return (
    <div className='text-center py-5 mb-5'>
        
       <h1>My favorite color is : {color}!</h1>
       <h2>My name is {myName}.</h2>
       <h2>Counting is: {count}</h2>
    <button
      type="button"
      onClick={() => setColor("primary")}
    >Primary</button>
    <button
      type="button"
      onClick={() => setColor("danger")}
    >Danger</button>
    <button
      type="button"
      onClick={() => setColor("info")}
    >Info</button>
    <button
      type="button"
      onClick={() => setColor("success")}
    >Success</button>

    <br />
    <br />

    <button className={`btn btn-${color}`}>I'm a button</button>
    
    </div>

  )
}
