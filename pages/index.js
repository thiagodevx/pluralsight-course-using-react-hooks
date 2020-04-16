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
      <input onChange={update} placeholder='Enter Some Text' />
      {history.map(record => (
        <div>{record}</div>
      ))}
    </>
  )
}
