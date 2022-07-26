import React, {useReducer} from 'react'

// import { CountContext } from '../../context/CountContext'

export default function UseReducer() {

    const reducer = (state, action) => {
        switch(action.type){
            case "INCREMENT":
                return state + 1
            case "DECREMENT":
                return state - 1
            case "RESET":
                return initialState
            default:
                return state
        }
    }

    const initialState = 0

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="py-5">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h2 className='mb-4'>UseReducer Hook</h2>

                    <button className='btn btn-success' onClick={ () => {dispatch ({type:"INCREMENT"})}}>Increment</button>

                    <h3 className='my-4'>{state}</h3>

                    <button className='btn btn-danger' onClick={ () => {dispatch ({type: "DECREMENT"})}}>Decrement</button>
                    <hr />
                    <button className='btn btn-info' onClick={ () => {dispatch ({type: "RESET"})}}>Reset</button>
                </div>
            </div>
        </div>
    </div>
  )
}