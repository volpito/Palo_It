import React, { useRef, useState } from 'react'
import Zone2 from './Zone2'
import uuidv4 from 'uuid/v4'

function Zone1() {
  
  const cityRef = useRef()
  const [cityList, setCityList] = useState([])

  function handleClick() {
    const cityName = cityRef.current.value
    if (cityName === '') return
    
    setCityList(prevCity => {
      return [...prevCity, {id: uuidv4(), name: cityName}]
    })
    cityRef.current.value = null;
  } 

  const deleteCity = (id) => {
    setCityList(cityList.filter(a => a.id !== id))
  }

  return (
    <>
      <div className='flex my-5'>
        <input
          required
          ref={cityRef}
          className="appearance-none min-w-0 w-full bg-white border border-black rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs"
          placeholder="Enter a City Name"
        />
        <div className="rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            onClick={handleClick}
            className="w-28 bg-white-500 border border-black rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-black hover:bg-gray-100"
          >
            OK
          </button> 
        </div>   
      </div>
      <Zone2 cityList={cityList} onDelete={deleteCity}/>
    </>
  )
}

export default Zone1
