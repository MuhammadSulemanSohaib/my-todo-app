import React, {useContext} from 'react'

import { CountContext } from '../../context/CountContext'

export default function UseContext() {

    const {count, handleIncrement, handleDecrement,handleReset} = useContext(CountContext)

  return (
    <div className="py-5">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h2 className='mb-4'>UseContext Hook</h2>
                    <button className='btn btn-success' onClick={handleIncrement}>Increment</button>
                    <h3 className='my-4'>{count}</h3>
                    <button className='btn btn-danger' onClick={handleDecrement}>Decrement</button>
                    <hr />
                    <button className='btn btn-info' onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    </div>
  )
}
