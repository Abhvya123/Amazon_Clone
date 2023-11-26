import React from 'react'
import "./home.css";
import Product from './Product';
import Header from './Header';
function Home() {
  return (
    
    
    <div className='home'>
      <Header/>
      
     <div className="home__container">
        <img  className=" home_image"src="https://camo.githubusercontent.com/3219f1a323861544a87ef88b3b6c978f9eb632e798f8fe3555056429c3cddbfc/68747470733a2f2f696d61676573322e696d67626f782e636f6d2f66612f36322f54436b4a744133465f6f2e6a7067" alt=""/>
        <div className="home__row">
          <Product image= {"https://m.media-amazon.com/images/I/414wvTIr5wL._SY300_SX300_QL70_FMwebp_.jpg"} price ={449} title={`Spinfluencs Stainless Steel Sipper 1 Litre Leakage Proof Water Bottle   (Pack Of-01, 1000ML)`}/>
           <Product   image={"https://m.media-amazon.com/images/I/31BJjL58ohL._SX300_SY300_QL70_FMwebp_.jpg"} price={1299} title={"boAt Airdopes 170 TWS Earbuds with 50H Playtime, Quad Mics ENx™ Tech, Low Latency Mode, 13mm Drivers, ASAP™ Charge, IPX4, IWP™, Touch Controls & BT v5.3(Classic Black)"} />
          <Product image={"https://m.media-amazon.com/images/I/61eJ+GzIsKL._UY679_.jpg"} price={699} title={"ILLI LONDON Women's Bodycon Knee Length Dress"}/>
          

        </div>
        <div className="home__row">
        <Product className="p3" image={"https://m.media-amazon.com/images/I/51XiuWOyj2L._SX300_SY300_QL70_FMwebp_.jpg"} price={1000} title={"Herbal Food All Edible Seeds Combo Pack of - 900gm | Chia, Pumpkin, Sunflower, Flax, Watermelon & Muskmelon Seeds 150g Each [Gread - Premium]]"}/>
        <Product  className="p4"image={"https://m.media-amazon.com/images/I/51Yiw69dqxL._SX300_SY300_QL70_FMwebp_.jpg"} price={2000} title={"Dry Fruit Hub Mongra Saffron Original Kashmir Kesar 1gm | Kasor | Zafran | Kasar | Grade A+++ Kesar For Pregnant Women Kesor | WHO-GMP ISO Certified With Free Antique Wooden Box"}/>
        <Product className="p5" image={"https://m.media-amazon.com/images/I/318p39fG2+L._SY300_SX300_.jpg"} price={1241.00} title={"Philips Essential Care Hair Dryer (HP8120/00) | 1200Watts| On-The-Go Dryer| Thermoprotect| 3 Heat & Speed Settings-Black| Quick, Gentle Drying for Shiny Hair"}/>
        
    


        </div>
        <div className="home__row">
          <Product image={"https://m.media-amazon.com/images/I/41g1-TdRXnL._SX300_SY300_QL70_FMwebp_.jpg"} price={799} title={"CINAGRO (Pack of 5 Grow Bags, 18x18 inch, Heavy Duty HDPE UV Stabilized for Terrace Gardening 250 GSM (Green)"}/>
                 <Product image={"https://m.media-amazon.com/images/I/41EFMi5UpCL._SX300_SY300_QL70_FMwebp_.jpg"} price={549} title={"Rosemary Leaves 500gms | Top Grade Leaves From Egypt | For Seasoning, Tea & Hair | Cooking Pasta Soups Salad Chicken Herbs Bread Tea | Supports Hair Growth By Bixa Botanical"}/>
                 </div> 
     </div>
    </div>
  )
}

export default Home
