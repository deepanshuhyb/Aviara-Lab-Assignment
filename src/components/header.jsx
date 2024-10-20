import React from 'react'

function header() {
  return (
    <div className='h-16 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-around '>
      <p className='text-3xl font-mono'>Weather Dashboard</p>
      <a href="https://openweathermap.org/" target='_blank' className='text-m subpixel-antialiased	'>Api</a>
    </div>
  )
}

export default header