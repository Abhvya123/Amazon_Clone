import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id,title,image,price,rating}) {
  const [{basket}, dispatch]=useStateValue();
  console.log("this is the basket",basket);
  const addToBasket=()=>{
    //dispatch the item into the data layer 
dispatch ({
type:'ADD_TO_BASKET',
item:{
  id:id,
  title:title,
  image:image,
  price:price,
  rating:rating,

},

});
  };
  return (
    <div className='product'>
      <div className="product__info">
        <p>{title} </p>
       <p className='product_price'>
        <small className='st1'>Rs.</small>
        <strong className='st'>{price}</strong>
       </p>
       <div className="product_rating">
    <img  className="star1"src="https://thumbs.dreamstime.com/b/flat-yellow-award-star-illustration-flat-yellow-award-star-illustration-rating-icon-121555804.jpg"/>
    <img  className="star2"src="https://thumbs.dreamstime.com/b/flat-yellow-award-star-illustration-flat-yellow-award-star-illustration-rating-icon-121555804.jpg"/>
    <img  className="star3"src="https://thumbs.dreamstime.com/b/flat-yellow-award-star-illustration-flat-yellow-award-star-illustration-rating-icon-121555804.jpg"/>
    
       </div>
     
       <img  className=" p_image"src={image} alt=""/> 

        <div className="button">
        <button  onClick ={addToBasket} className='button_c'><strong>Add to Basket</strong></button>
        </div>
       
 </div>
  
    </div>
  )
}

export default Product;

