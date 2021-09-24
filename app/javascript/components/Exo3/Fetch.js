import React, { useEffect, useState } from 'react'
import AddButton from '../Exo4/AddButton';
import EditButton from '../Exo4/EditButton';
import DeleteButton from '../Exo4/DeleteButton';

function Fetch() {
  
  const [products, setProducts] = useState([]);

  const fetchProducts =() => {
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
      console.log("error fetch");
    });
  }

  useEffect( () => {fetchProducts();}, [/* products */]);  //but infinite server loop
  
  return (
    <div>
      <h1 className="my-6">Here are the listed items : </h1>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/12"> Id     </th>
            <th className="w-1/12"> CityId </th>
            <th className="w-1/12"> Ref    </th>
            <th className="w-1/12"> Name   </th>
            <th className="w-1/12"> City   </th>
            <th className="w-1/12"> Price  </th>
            <th className="w-1/12">        </th>
            <th className="w-1/12">        </th>
          </tr>
        </thead>
      {products.map((a, i) => {
        return (
          <tbody key={i}>
            <tr >
              <td className="text-center">{a.id}        </td>
              <td className="text-center">{a.city_id}   </td>
              <td className="text-center">{a.prodRef}   </td>
              <td className="text-center">{a.prodName}  </td>
              <td className="text-center">{a.prodCity}  </td>
              <td className="text-center">{a.prodPrice} </td>
              <td className="text-center"><EditButton id={a.id}/></td>
              <td className=""><DeleteButton id={a.id}/></td>
            </tr>
          </tbody>
        )
        })}
        <tfoot>
          <tr>
            <th className="w-1/12"></th>
            <th className="w-1/12"></th>
            <th className="w-1/12"></th>
            <th className="w-1/12"></th>
            <th className="w-1/12"></th>
            <th className="w-1/12"></th>
            <th className="w-1/12"></th>
            <th className="w-1/12"><AddButton/></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Fetch
