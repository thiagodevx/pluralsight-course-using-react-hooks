import React, { useRef, useState, useEffect } from 'react'

export default props => {
  const imageRef = useRef(null)
  const [inView, setInView] = useState(false)
  const scrollHandler = () => {}

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

  return <img src={props.primary} ref={imageRef} />
}
