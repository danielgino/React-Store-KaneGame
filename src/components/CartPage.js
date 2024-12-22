

import React, { useState, useEffect } from 'react';
import { ref, get } from "firebase/database";
import database from './FireBaseDB';
import '../styles/CartPage.css'
function CartPage(){

    const [cartData, setCartData] = useState([]);
    const [totalPrice,setTotalPrice]=useState(0)
    const today = new Date().toISOString().split('T')[0];


    const handleDouble=()=>{
      const updatedCartData = [...cartData];
      for (let i=0; i<updatedCartData.length; i++){
        let toCheck=updatedCartData[i].gameName;
         for(let j=i+1; j<updatedCartData.length; j++){
          if(toCheck==updatedCartData[j].gameName){
            updatedCartData[i].quantity+=updatedCartData[j].quantity
            updatedCartData.splice(j, 1)
    
          }
    
         }
      }
      setCartData(updatedCartData);
       
    }

 
    useEffect(() => {
      const cartRef = ref(database, 'cart'); //  את המידע זה מושך
      get(cartRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const allData= (Object.values(snapshot.val())); // המרת האובייקט למערך
            const filterByToday=allData.filter(item=>item.date===today);
            setCartData(filterByToday)
          } else {
            console.log("No items in cart.");
          }
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    },[]);

    
    const HandleTotalPrice=()=>{
      let sumPrice=0;
      for( let i= 0; i<cartData.length;i++){
        sumPrice+=cartData[i].gamePrice* cartData[i].quantity
        }
        setTotalPrice(Math.round(sumPrice * 100) / 100)
    }

    useEffect(() => {
      if (cartData.length > 0) {
        handleDouble();
       HandleTotalPrice();
      }
    }, [cartData]); 
    return (
        <div>
        <h2 className='page-title'>Shopping Cart</h2>
        {cartData.length > 0 ? (
          cartData.map((item, index) => (
            <div className='cart-card' key={index}>
             <img src={item.picture} alt={item.gameName} />
              <h4>{item.gameName}</h4>
              <p><b>Price:</b> {item.gamePrice} USD</p>
              <p><b>Quantity:</b> {item.quantity}</p>
            </div>
            
          )))

         
         : (<p className='empty'>Your cart is empty</p>)
         
         
         }

        
          {cartData.length>0 ? (
             <div className='buying-section'>
            <p>Total Price: {totalPrice} </p>
            <button className='buy-now-button'>Buy Now</button>
            </div>

          ) : null}

         </div>

    )

}

export default CartPage