import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-300 py-4 mt-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-gray-800 font-light text-sm">&copy; 2023 LeadingLadies</div>
        <div className="flex items-center">
          <a href="/aboutus" className="text-gray-600 hover:text-gray-800 font-medium text-sm mr-6">About Us</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-800 font-medium text-sm">Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
