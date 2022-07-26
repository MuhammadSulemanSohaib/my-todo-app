import React from 'react'

export default function Fruits() {

    const fruits = ["Apple", "Mango", "Orange", "Banana", "Strawberry", "Peach"];

  return (
<div className='py-5 bg-light'>
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className='text-center'>This is our Fruits section.</h1>
                <div className='text-center'>
                    <ul className='fruit'>

                        {fruits.map((fruits, i) => { 
                        return <li key={i}>{fruits}</li>
                    })}

                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>  

)}
