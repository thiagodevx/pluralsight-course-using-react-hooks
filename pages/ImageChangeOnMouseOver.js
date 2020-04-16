import React from 'react'
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver'

export default _ => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primary='/speakers/bw/Speaker-187.jpg'
        secondary='/speakers/Speaker-187.jpg'
      />
      <ImageToggleOnMouseOver
        primary='/speakers/bw/Speaker-1124.jpg'
        secondary='/speakers/Speaker-1124.jpg'
      />
    </div>
  )
}
