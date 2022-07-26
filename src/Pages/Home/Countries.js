import React from 'react'
import { ButtonSimple } from '../../Components/Button/ButtonSimple'

import countries from '../../data/countries'

export default function Countries() {

  return (
<div className='py-5 bg-secondary'>
    <div className="container">
        <div className="row">
            <div className="col">
                <h2 className='text-center text-white py-4'>This is our Countries section.</h2>
                <ul className='country py-2'>
                    {countries.map((country, i) => {
                        return <li className="text-white" key={country}>{i + 1} {country}</li>
                    })}
                </ul>
                <div className="text-center mb-2"><ButtonSimple bg="success" text="Edit" icon="fas fa-edit me-2" /></div>
                <div className="text-center mb-2"><ButtonSimple bg="warning" text="Add" icon="fas fa-plus me-2" /></div>
                <div className="text-center"><ButtonSimple bg="danger" text="Delete" icon="fas fa-trash me-2" /></div>
            </div>
        </div>
    </div>
</div>  

)}
