import React from 'react'
import City from './City'

function Zone2({cityList, onDelete}) {

  return (
    <div className="flex">
      {cityList.map(a => {
        if (a.name === "paris" || a.name === "lyon" || a.name === "marseille" || a.name === "toulouse" || a.name === "lille" || a.name === "bordeau") {
          return (
            <City key={a.id} city={a} onDelete={onDelete}/>
          )
        }
      })}
    </div>
  )
}

export default Zone2
