import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen';

export default function AllOrders({currentUser}) {
  const [allOrders , setAllOrders] = useState(null);
  
  async function getAllOrders(){
    try {
      const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${currentUser.id}`);
      setAllOrders(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(function(){
    getAllOrders();
  } )
  
  
  
  
  
  
  
  return <>
    {allOrders? <div className='container'>
      <div className='row'>
        {allOrders.map(function( item  ,  index  ){return <div key={index} className="col-md-3 m-3">
          <div className='tw-bg-sky-700 overflow-hidden tw-text-white/90 rounded-3'>
            <h5 className='my-2 ms-1'>Price: {item.totalOrderPrice}</h5>
            <h5 className='my-2 ms-1'>Order Type: {item.paymentMethodType}</h5>
            <p className='my-2 ms-1'> This order was delivered to ({item.shippingAddress.details}) in ({item.shippingAddress.city}) with this number ({item.shippingAddress.phone}) </p>
          </div>
        </div>})}
      </div>
    </div>: <LoadingScreen/>}
    </>
}
