import React from 'react'
import { ButtonSimple } from '../../Components/Button/ButtonSimple'

export default function Action() {
  return (
    <div className="view">                
    <div><ButtonSimple bg="info" icon="fas fa-pen" /></div>
    <div><ButtonSimple bg="danger" icon="fas fa-trash" /></div>
    </div>
)
}
