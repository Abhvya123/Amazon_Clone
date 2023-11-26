import React from 'react'
import "./checkoutproduct.css";
import { useStateValue } from './StateProvider';


function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket}, dispatch]=useStateValue();
    const removefromBasket=()=>{
dispatch({
    type:"REMOVE_FROM_BASKET",
id:id
})
    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutproduct__image' src={image}/>
      <div className="checkoutproduct__info">
        <p className='checkoutproduct__title'>{title}</p>
    <p className='checkoutproduct__price'>{price}
<small>$</small>
<strong>{price}</strong>
</p>
<div className="checkoutproduct__rating">
    {Array(rating)
    .fill()
    .map((_,i)=>{
        <p>*</p>
    }) }
</div>
<button className='button__info' onClick={removefromBasket}>Remove from Basket </button>
      </div>
    </div>

  )
}

export default CheckoutProduct
