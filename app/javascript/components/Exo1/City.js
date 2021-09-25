import React from 'react'
import { FaTimes } from 'react-icons/fa';

const City = ({city, onDelete}) => {

  return (
    <div title="cityTitle">
      <button 
        title="cityBtn"
        className="flex bg-gray border border-black rounded px-2 mx-2 mb-4 capitalize">
        {city.name + " "} 
        <FaTimes onClick={() => onDelete(city.id)} className="bg-gray border border-black rounded my-auto ml-1"/>
      </button>
    </div>
  )
}

export default City
