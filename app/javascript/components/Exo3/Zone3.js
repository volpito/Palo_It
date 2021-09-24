import React from 'react'
import Fetch from './Fetch';
import FetchCity from './FetchCity';

function Zone3( {id} ) {
  if(id.length == 0){
    return(
      <Fetch/>
    )
  }else{
    return(
      <FetchCity id={id} />
    )
  }
}

export default Zone3
