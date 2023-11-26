import React from 'react'
import "./checkout.css";
import Header from './Header';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
  const [{basket,user},dispatch]=useStateValue();
  return (
  <div>
<Header/>

<div className="checkout">
<div className="checkout__left">

<h3>Hello {!user?"Guest " :user.email}</h3>
<h1 className='checkout__title'>Your Shopping Basket </h1>
<div className='checkout__right'>
<Subtotal/>


</div>
{basket.map(item=>(
  <CheckoutProduct className="check"
  id={item.id}
  title={item.title}
  image={item.image}
  price={item.price}
  rating={item.rating}

  />

))}



</div>





</div>

</div>
  )
}

export default Checkout

