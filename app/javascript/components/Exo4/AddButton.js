import React from 'react'

function AddButton() {
  //add btn that redirects to the scaffold form 
  //the form doesn't work because it returns a sting instead of an int for mandatory city_id
  return (
    <div className="rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
    <button
      title='addUrlBtn'
      onClick={event =>  window.location.href='/products/new'}
      className="flex-none	float-right w-28 bg-white-500 border border-black rounded-md py-2 px-4 items-center justify-center text-base font-medium text-black hover:bg-gray-100"
    >
      Add Item
    </button> 
    </div>
  )
}

export default AddButton
