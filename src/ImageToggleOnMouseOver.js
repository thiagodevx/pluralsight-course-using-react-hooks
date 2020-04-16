import React, { useRef } from 'react'

//same could be achieved with state, but it is a nice example of the useRef
export default props => {
  const imageRef = useRef(null)
  return (
    <img
      onMouseOver={() => (imageRef.current.src = props.secondary)}
      onMouseOut={() => (imageRef.current.src = props.primary)}
      src={props.primary}
      ref={imageRef}
    />
  )
}
