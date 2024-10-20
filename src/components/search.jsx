import React, { useState } from 'react'
import { geoapi } from '../geoapi'

const search = () => {
  const [name, setName] = useState('')
  const geolocationcCall = async e => {
    e.preventDefault()
    try {
      const response = await fetch(geoapi(name))
      const result = await response.json()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form
        action=''
        onSubmit={geolocationcCall}
        className='flex justify-center gap-2'
      >
        <label htmlFor='' className=''>
          <p>Enter City Name</p>
          <input type='text' name='' id='' className='border-2 border-black' onChange={(e)=> setName(e.target.value)} />
        </label>
        <button type="submit" className='justify-center'>Search</button>
      </form>
    </div>
  )
}




export default search
