import React from 'react'
import Header from './Header'
import "./account.css"
import { Link } from 'react-router-dom'
function Account() {
  return (
    <div className='account'>
<Header/>
<div className="account__info account__info2">
    <Link to ="/">
    <img className='image3' src="https://www.shutterstock.com/shutterstock/photos/2270561027/display_1500/stock-vector-amazon-logo-icon-logo-sign-art-design-symbol-famous-industry-jeff-bezos-corporate-text-isolated-2270561027.jpg" alt=""/>
    </Link>
    
    <div className="info__1">
    <p><strong>First_Name</strong><input className='log'type="text"/></p>
<p><strong>Middle_Name</strong><input className='log'type="text"/></p>
<p ><strong>Last_Name</strong><input className='log' type="text"/></p>
<p><strong>Email_Id</strong><input className='log' type="email"/></p>
<p><strong>Mobile_Number</strong><input className='log' type="number"/></p>
<p><strong> Set Password</strong><input className='log'type="password"/></p>
<p><strong>Enter Password Again</strong><input className='log'type="password"/></p>
<p><strong>Shipping Address</strong><input className='log' type="text"/></p>
<p><strong> City</strong><input  className='log'type="text"/></p>
<p><strong> State</strong><input className='log'type="text"/></p>
<p><strong> Country</strong><input className='log'type="text"/></p>
<p><strong>Pincode</strong><input className='log'type="number"/></p>
<button className='Register'><strong>Register Now</strong></button>
    </div>
    
</div>

 
    </div>
  )
}

export default Account
