import React, { useState } from 'react'
import Header from './Header'
import "./login.css"
import { Link } from 'react-router-dom'
import {auth} from './firebase';
import {useNavigate} from "react-router-dom";


function Login() {
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setpassword]=useState('');
const signin = e =>{
  e.preventDefault()
  auth.signInWithEmailAndPassword(email,password).then(auth=>{
     navigate('/')
       })
  .catch(error=> alert(error.message))
}

  const Register= e=>{
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
  console.log("auth")

    })
    .catch(error=>alert(error.message))
  }


  return (
    <div  className='login'>
        <Header/>
        <Link to="/">
        <img className='login__image' src="https://www.shutterstock.com/shutterstock/photos/2270561027/display_1500/stock-vector-amazon-logo-icon-logo-sign-art-design-symbol-famous-industry-jeff-bezos-corporate-text-isolated-2270561027.jpg" alt=""/>
        </Link>
      
        
      <div className="login__page">
        <p className='login__userid'><strong>Email-Id </strong><input className='text1' type="text"  value={email} onChange={e=>setEmail(e.target.value)} Required  /></p>
        <p className='login__password'><strong>Password:</strong><input  className='password1' type="password" value={password} onChange={e=> setpassword(e.target.value) } Required/></p>
<p className='para'><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>By signing-in you agree to the AMAZON FAKE CLONE  Conditions of Use & Sale.<br/> Please see our Privacy Notice, our cookies Notice and our Interest -Based Ads Notice</p>
      </div>
      <button className='login__button' type='submit' onClick={signin}><strong className='login__signin'>Sign In</strong></button>
      <p className='login__account'>Not having an account?</p>
      <Link to ="/account">
      <button  onClick={Register} className='login__button2'><strong>Create an Account</strong></button>
      </Link>
      
    <img className='image__logo2' src="https://i.ytimg.com/vi/XagnBZqZUSw/maxresdefault.jpg" alt=""/>
    </div>
  )
};

export default Login;
