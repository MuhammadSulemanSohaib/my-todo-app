import React, {useState, createContext} from 'react'

export const CountContext = createContext()

export default function CountContextProvider(props) {

  const myName = "Muhammad Suleman Sohaib"

  const initialState = 0

  const [count, setCount] = useState(initialState)

    const handleIncrement = () => {
        setCount(c => c + 1)
    }

    const handleDecrement = () => {
        count > 0 &&  setCount(c => c - 1)
    }

    const handleReset = () => {
        setCount(initialState)
    }

  return (
      <CountContext.Provider value={{myName, count, handleIncrement, handleDecrement, handleReset}}>
        {props.children}
      </CountContext.Provider>
    )
}