import React from 'react'
import Ever from '../components/Ever'
import Portfolio from '../components/Portfolio'

const work = () => {
  return (
    <div>
        <Ever heading='My Work' message='This is some of my recent work traveling the world.' />
        <Portfolio />
    </div>
  )
}

export default work