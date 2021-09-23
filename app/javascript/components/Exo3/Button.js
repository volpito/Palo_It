import React from 'react'

function Button({value, onSearch, city}) {
  
  return (
    <div className="rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
    <button
      type="submit"
      onClick={() => onSearch(city.map(a => a.name))}
      className="absolute flex-none	ml-80 w-28 bg-white-500 border border-black rounded-md py-2 px-4 items-center justify-center text-base font-medium text-black hover:bg-gray-100"
    >
      {value}
    </button> 
    </div>
  )
}

export default Button
