import React from 'react'
import City from './City'
import Button from '../Exo3/Button';

function Zone2({cityList, onDelete, onSearch}) {

  return (
    <>
    
    <Button value={'Search'} onSearch={onSearch} city={cityList}/>

    <div className="flex">
      
      {cityList.map((a, i) => {
        if (a.name === "paris" || a.name === "lyon" || a.name === "marseille" || a.name === "toulouse" || a.name === "lille" || a.name === "bordeau") {
          return (
            <City className="absolute" key={i} city={a} onDelete={onDelete}/>
          )
        }

      })}
    </div>
    </>
  )
}

export default Zone2
