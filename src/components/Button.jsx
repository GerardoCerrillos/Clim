import React, { useState } from 'react'
import './button.css'

const Button = ({temp , checked}) => {

  const [condition, setCondition] = useState(false)

  const fun = () => {
    setCondition(!condition)
  }

  return (
    <button onClick={fun} className={checked ? "buttom_white" : "buttom_dark"}>{condition ? `celsius: ${temp?.celsius}` : `farenheit: ${temp?.farenheit}`}</button>
  )
}

export default Button