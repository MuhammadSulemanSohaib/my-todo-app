import React from 'react'

export const ButtonSimple = (props) => {

  const {bg, icon, text} = props
  console.log(props)

  return (
    <button className={`btn btn-${bg}`}><i className={`${icon}`}></i>{text}</button>
  )
}
