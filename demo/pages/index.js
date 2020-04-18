import React, { useState } from 'react'

export default _ => {
  const [inputText, setInputText] = useState('')
  const [history, setHistory] = useState([])
  const update = e => {
    const value = e.target.value
    setInputText(value)
    setHistory([...history, value])
  }
  return (
    <>
      <h1>To access any component, you can use the name of it on the route</h1>
      <p>
        For example, localhost:3000/UseState, or
        localhost:3000/ImageChangeOnMouseOver
      </p>
    </>
  )
}
