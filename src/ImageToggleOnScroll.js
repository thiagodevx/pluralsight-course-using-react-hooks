import React, { useRef, useState, useEffect } from 'react'

export default props => {
  const imageRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

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
    setIsLoading(false)
    setInView(isInView)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [isLoading])

  return (
    isLoading || (
      <img
        style={{
          display: 'block'
        }}
        src={inView ? props.secondary : props.primary}
        ref={imageRef}
      />
    )
  )
}
