import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { CartContext } from '../../Context/CartContextProvider';
import $ from 'jquery'

export default function DetailsForProduct() {
  //                                                  variable i exported 
  const { addProductToCart , removeFromCart } = useContext(CartContext)


  let {_id} = useParams()
  async function getSpecificProduct(){
    try{
      let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${_id}`);
      setSpecificProduct(data.data)
      // console.log(data.data);
    }
    catch(err){
      console.log(err);
    }
  }
  const [specificProduct , setSpecificProduct] = useState(null);
  function removeProduct(){
    removeFromCart(specificProduct._id);
    if (removeFromCart) {
      $('.removedMsg').fadeIn(1000 , function(){
        $('.remove').fadeOut(1000)
        $('.add').fadeIn(1000)
        setTimeout(() => {
          $('.removedMsg').fadeOut(1000)
        }, 3000);
      })
    }
  }
  function addProduct(){
    addProductToCart(specificProduct._id)
    if( addProductToCart )
    $('.successMsg').fadeIn(1000 , function(){
      $('.remove').fadeIn(1000)
      $('.add').fadeOut(1000)
      setTimeout(() => {
        $('.successMsg').fadeOut(1000)
      }, 3000);
    })
  
  }
  
  useEffect(function(){
    getSpecificProduct()
  });
  
  
  
  
  
  
  
  return <>
  
  {specificProduct? <div className="container my-4">
    <div className='row'>
      <div className="col-md-3">
        <img className='w-100' src={specificProduct.imageCover} alt={specificProduct.title} />
      </div>
      <div className="col-md-9">
        <h2 className='text-center mb-2'>
          {specificProduct.title}
        </h2>
        <p className='text-secondary mb-2'>{specificProduct.description}</p>
        <h4 className='mb-2'>Price:{" "+specificProduct.price}</h4>
        <h4 className='mb-2'>Quantity:{" "+specificProduct.quantity}</h4>
        <h4 className='mb-2'>Rate:{" "+specificProduct.ratingsAverage}</h4>
        <button onClick={addProduct} className='btn tw-bg-sky-700 hover:tw-bg-sky-800/50 text-white mt-5 add w-100'>Add to Cart+</button>
        <button style={{'display':'none'}} onClick={removeProduct} className='btn btn-danger remove w-100'>Remove from cart -</button>
        <div style={{'display': 'none'}} className='alert successMsg alert-success'>product added successfully...</div>
        <div style={{'display': 'none'}} className='alert removedMsg alert-success'>product removed successfully...</div>
      </div>
    </div>
  </div>: <LoadingScreen/>}
  </>
}
