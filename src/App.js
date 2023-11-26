import React,{useEffect} from 'react';
import './App.css';
import Account from "./Account"
import Payment from './Payment';
import Orders from './Orders';


import {BrowserRouter,Route,Routes} from"react-router-dom";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from './Login';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const promise=loadStripe("pk_test_51NvNDCSE389HHUwB53rtYPMVxjsTrhElDFJ65RPILTOturJdbWpoJncN8OrVwgJJuyMmSizkYtF9lBA4jRPUOJi200XLe6YE6I");
function App() {

const[{},dispatch]=useStateValue();
useEffect(()=>{
//will only run once when the aapp commponent loads 
auth.onAuthStateChanged(authUser=>{
  console.log('The user ',authUser);
  if(authUser){
    //the user just logged in the 
dispatch({
  type:'SET_USER',
  user:authUser
})

}
  else{
    //user is logged out 
    dispatch({
      type:'SET_USER',
      user:null
    })
  }
})
},[])
return (
<BrowserRouter>
<Routes>
  <Route path="/orders" element={<Orders/>}/>

<Route path="/payment" element={<Elements stripe={promise}>{<Payment/>}</Elements>}/>
  <Route path="/"  element={<Home/>}/>
  <Route path="/account" element={<Account/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/checkout" element={<Checkout/>}/>
</Routes>
</BrowserRouter>


   
  );
}

export default App;
