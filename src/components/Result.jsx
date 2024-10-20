import React, { useState } from 'react'
import { weatherapi } from '../geoapi';

function Result() {
    const [lat,setLat] = useState();
    const [lon,setLon] = useState();
    const weatherRes = async e => {
        e.preventDefault();
        try {
            const response = await fetch(weatherapi(lat,lon));
            const result = await response.json();
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div>

    </div>
  )
}

export default Result