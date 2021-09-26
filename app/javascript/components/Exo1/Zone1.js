import React, { useRef, useState, useEffect } from 'react'
import Zone2 from './Zone2'
import uuid from 'uuid/v4'
import Zone3 from '../Exo3/Zone3';
import Parse from '../TinyArythmeticExpressionParser/TinyArythmeticExpressionParser'

function Zone1() {
  
  const cityRef = useRef()
  const [cityList, setCityList] = useState([])
  const [searchId, setSearchId] = useState([])
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/products`, {
      method: 'get',
    })    
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setProducts(data.products);
    })
    .catch(function () {
      console.log("error fetch zone 1");
    });

  }, []);

  function handleClick() {
    var cityName = cityRef.current.value
    if (cityName === '') return
    cityName = cityName.toLowerCase().split(' ')
    cityName = cityName.filter(a => a == 'lyon' || a == 'paris' || a == 'marseille' || a == 'toulouse' || a == 'lille')
    cityName = cityName.map((a, i) => {
      setCityList(prevCity => {
        return [...prevCity, {id: {uuid}, name: a}]
      })
    })
    cityRef.current.value = null;
  } 

  function handleSearch(city) {
    products.filter((a) => {
      if(a.prodCity == ""){
        setSearchId(null)
      }
      for(var i=0; i<city.length; i++){
        if(a.prodCity.toLowerCase() == city[i]){
          setSearchId(a.city_id)
        }        
      }
    })
    console.log(searchId)
  }

  const deleteCity = (id) => {
    setCityList(cityList.filter(a => a.id !== id))
  }

  return (
    <>
      <div className='flex my-5'>
        <input
          required
          title='helloCityName'
          ref={cityRef}
          className="appearance-none min-w-0 w-full bg-white border border-black rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs"
          placeholder="Enter a City Name"
        />
        <div className="rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            onClick={handleClick}
            className="w-28 bg-white-500 border border-black rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-black hover:bg-gray-100"
          >
            OK
          </button> 
        </div>   
      </div>
      <Zone2 cityList={cityList} onDelete={deleteCity} onSearch={handleSearch}/>
      <Zone3 id={searchId}/>

      <div>
        <h2 className="font-black">Here are a few expressions : </h2>
        <Parse expression={'10,50+2,30'}/>
        <Parse expression={'25,60-13,1'}/>
        <Parse expression={'5*2'}/>
        <Parse expression={'100/3'}/>
        <Parse expression={'2*5+10,65'}/>
        <Parse expression={'(10+5+2,75-3)*3'}/>
      </div>
    </>
  )
}

export default Zone1
