import React, { useState } from 'react'
import { geoapi } from '../geoapi'
import { weatherapi } from '../geoapi'

const Search = ({ Setresult }) => {
  const [name, setName] = useState('')

  const geolocationCall = async e => {
    e.preventDefault()
    try {
      const response = await fetch(geoapi(name))
      const result = await response.json()
      // console.log(result);

      if (result[0]) {
        const response1 = await fetch(weatherapi(result[0].lat, result[0].lon))
        const result1 = await response.json();
        Setresult(result1);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={geolocationCall} className='flex justify-center gap-2'>
        <label>
          <p>Enter City Name</p>
          <input
            type='text'
            className='border-2 border-black'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <button type='submit' className='justify-center'>
          Search
        </button>
      </form>
    </div>
  )
}

export default Search
