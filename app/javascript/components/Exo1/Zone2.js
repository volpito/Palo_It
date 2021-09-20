import React from 'react'
import City from './City'

const cityArr = [{name: 'paris'}, {name: 'lyon'}, {name: 'lille'}, {name: 'marseille'}, {name: 'toulouse'}]

function Zone2({cityList, onDelete}) {
  
  return (
    <div className="flex">
      
      {cityList.map((a, i) => {
        if (a.name === "paris" || a.name === "lyon" || a.name === "marseille" || a.name === "toulouse" || a.name === "lille" || a.name === "bordeau") {
          return (
            <City key={i} city={a} onDelete={onDelete}/>
          )
        }

      })}
    </div>
  )
}

export default Zone2
