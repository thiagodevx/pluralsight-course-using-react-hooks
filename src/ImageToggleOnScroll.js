import React, { useRef, useState, useEffect } from 'react'

export default props => {
  const imageRef = useRef(null)
  const [inView, setInView] = useState(false)

  const scrollHandler = () => {
    setInView(isInView)
  }

  const isInView = () => {
    if (imageRef.current) {
      const rectangular = imageRef.current.getBoundingClientRect()
      return rectangular.top >= 0 && rectangular.bottom <= window.innerHeight
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <img
      style={{
        display: 'block'
      }}
      src={inView ? props.secondary : props.primary}
      ref={imageRef}
    />
  )
}
