import React from 'react'
import ImagesAbout from './ImagesAbout'
import TextAbout from './TextAbout'

const About = () => {
  return (
    <div className='container'>
      <h2>About Us</h2>
      <div className='d-flex flex-sm-column justify-content-center'>
     <TextAbout/>
     <ImagesAbout/>
      </div>
    </div>
  )
}

export default About