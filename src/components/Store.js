import { set } from "firebase/database";
import React, { useEffect, useState } from "react";
import "../styles/Store.css"
import ShoppingButton from "./ShoppingButton";
import ScrollBar from "./ScrollBar";
function Store(){

    const [products,setProducts]=useState([]);
    const [copyArr, setCopyArr] = useState([]);
useEffect(()=>{
    //https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15
    const fetchData= async()=>{ 
        try{  
            const response= await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=75");
            const result=await response.json();
            const formatGames=result.map(game=> ({
                picture: game.thumb,
                name: game.title,
                rating: game.metacriticScore,
                steam: game.steamRatingText,
                price:game.normalPrice,
            }))
            setProducts(formatGames)
            setCopyArr([...formatGames])
        }catch(error) {
        console.log(error)

    }

    }
    fetchData()},[]);
    


  
    return (
      <>
      <ScrollBar products={products} setProducts={setProducts} copyArr={copyArr} />
        <div className="store-container">
          {products.map((game, index) => (
            <div className="game-card" key={index}>
                {game.picture ? (
                <img src={game.picture} alt={game.name || "Product image"} />
              ) : ( <p>No image available</p> )}
              <h2>{game.name}</h2>
              <div className="text-container">
              <p><b>Price: </b> {game.price} USD  </p>
              <p><b>Metacritic Raiting:</b> {game.rating} </p>
              <p><b>Steam Rating:</b>{game.steam}</p>
              </div>
             <ShoppingButton game={game}/>
            </div>
          ))}
        
        </div>
        </>
   

      );
      
}

export default Store;