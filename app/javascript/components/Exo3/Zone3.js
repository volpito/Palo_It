import React from 'react'
import Fetch from './Fetch';
import FetchCity from './FetchCity';

function Zone3( {id} ) {
  return (
    <div>
      <Fetch />
      <FetchCity id={id} />
    </div>
  )
}

export default Zone3
