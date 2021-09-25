import React from "react"

function HelloWorld (props) {
  return(
    <div className='mt-10 mb-5' title="helloTitle">
      {props.greeting}
    </div>
  )
}

export default HelloWorld
