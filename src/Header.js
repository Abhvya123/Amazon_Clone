import React from 'react'
import"./Header.css";
import  {Link} from "react-router-dom";
import ShoppingBasketIcon from  "@mui/icons-material/ShoppingBasket";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {

  const[{basket,user},dispatch]=useStateValue();
  const handleAuthentication = ()=>{
if(user){
  auth.signOut();
}
  }
  return (
   
   <div className="header">

 <Link to="/">

 <img className='header__logo'
    src="https://st2.depositphotos.com/1866509/42321/i/450/depositphotos_423216766-stock-photo-seattle-washington-usa-june-2019.jpg"
    /> </Link>

  
    <div className="header__search">
<input className='header_searchInput' type="text"/>

<img className='header__search2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzoCjpAuK06OX27rheX7rRwqa82LUsskrplA&usqp=CAU"/>

    </div>
    <div className="header__nav">
    <Link to={!user && '/login'}>
      <div onClick={handleAuthentication} className='header__option'>
     <span className="header__optionLineOne">Hello {!user ? "Guest " :user.email} </span>

<span className='header__optionLineTwo'> {user ? "Sign out " : "Sign In "}</span>
      
      
      </div>
      </Link>
      <div className="header__option">
        <span className='header__optionLineOne'>Your</span>
        <span className=" header__optionLineTwo"> Prime</span>
      </div>
      <div className="header__option">
        <span className='header__optionLineOne'> Returns</span>
        <span className='header__optionLineTwo'>&Orders</span>
      </div>
     <Link to ="/checkout ">
     <div className="header__optionBasket">
        <ShoppingBasketIcon/>
        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
      </div>
     </Link>
     
 
     
</div>



   </div>
 
  )
}

export default Header;

