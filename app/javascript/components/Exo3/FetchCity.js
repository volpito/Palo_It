import React, { useEffect, useState } from 'react'

function FetchCity({id}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/products/city/${id}`, {
      method: 'get',
    })    
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setProducts(data.products);
    })
    .catch(function () {
      console.log("error fetch city");
    });

  }, [id]);

  return (
    <div>
      <h1 className="my-6">Here are the searched items : </h1>
      <table className="table-fixed">
            <thead>
              <tr>
                <th className="w-1/12"> Id     </th>
                <th className="w-1/12"> CityId </th>
                <th className="w-1/12"> Ref    </th>
                <th className="w-1/12"> Name   </th>
                <th className="w-1/12"> City   </th>
                <th className="w-1/12"> Price  </th>
              </tr>
            </thead>
      {products.map((a, i) => {
        return (
          
            <tbody key={i}>
              <tr >
                <td className="text-center">{a.id}</td>
                <td className="text-center">{a.city_id}</td>
                <td className="text-center">{a.prodRef}</td>
                <td className="text-center">{a.prodName}</td>
                <td className="text-center">{a.prodCity}</td>
                <td className="text-center">{a.prodPrice}</td>
              </tr>
            </tbody>
        )
        })}
      </table>
    </div>
  )
}

export default FetchCity
