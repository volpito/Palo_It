import React from 'react'
import City from './City'
import Button from '../Exo3/Button';

function Zone2({cityList, onDelete, onSearch}) {
//sends data back and forth between the cityList and the API (for search purposes) and the input and tag button 
  return (
    <>
    <Button value={'Search'} onSearch={onSearch} city={cityList}/>

    <div className="flex">
      
      {cityList.map((a, i) => {
          return (
            <>
            <City className="absolute" key={i} city={a} onDelete={onDelete}/>
            </>
          )
        }
      )}
    </div>
    </>
  )
}

export default Zone2
