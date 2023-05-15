import React from 'react'
import Contact from '../components/Contact'
import Ever from '../components/Ever'

const contact = () => {
  return (
    <div>
        <Ever heading='Contact Us' message='Submit the form below for working with us and even you can help us by donation.' button2="Contact Us" button3="Donate Now"/>
        
        <Contact />
    </div>
  )
}

export default contact