import  '../styles/ShoppingButton.css'
import { ref, push } from "firebase/database";
import database from './FireBaseDB';
import React,{useState,useEffect} from "react";
function ShoppingButton({game}){
     const dateToday=new Date().toISOString().split('T')[0];
     const [quantity,setQuantity]=useState(1)
     const [successMessage, setSuccessMessage] = useState(''); 
     const addQuantity=()=>{
        if(quantity<10){
        setQuantity(prevQuantity=>prevQuantity+1)
    }
    }
    const reduceQuantity=()=>{
        if(quantity >0){
        setQuantity(prevQuantity=>prevQuantity-1)
    }
    }

     const handleAddCart=()=>{
    const cartRef= ref(database,"cart");
    push(cartRef, {
        gameName: game.name,
        gamePrice: game.price,
        picture: game.picture, 
        quantity: quantity,
        date: dateToday,
      }).then(() => {
        console.log(`${game.name} added to cart!`);
        setSuccessMessage(`added successfully to cart!`); 
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000); 

      }).catch((error) => {
        console.error("Error adding item to cart: ", error);
      });
    };

    return(
        <>
<div className="quantity-btn-container">
<button  className="quantity-btn"  on onClick={addQuantity}>+</button>
    <p><b>{quantity}</b></p><br/>
    <button className="quantity-btn" on onClick={reduceQuantity}>-</button>
    </div>
    <button  className="shopping-btn" onClick={handleAddCart}>Add to Cart 🛒</button>
    {successMessage && <p className="success-message">{successMessage}</p>}

    </>
    )
}

export default ShoppingButton