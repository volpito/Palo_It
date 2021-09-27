import React from 'react'

function DeleteButton({id, isFetching}) {
//fetch method delete linked to a btn used to destroy a product via an id prop
  function handleDelete(id) {
      fetch(`/products/${id}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data);
      })
      .catch(function () {
        console.log("error fetch destroy");
      });
  }
  

  return (
    <div>
      <button className='m-0' onClick={() => {handleDelete(id)}}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
    </div>
  )
}

export default DeleteButton
