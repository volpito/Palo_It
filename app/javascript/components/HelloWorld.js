import React from "react"
//pretty straight-forward greeting program
function HelloWorld (props) {
  return(
    <div className='mt-10 mb-5' title="helloTitle">
      {props.greeting}
    </div>
  )
}

export default HelloWorld
