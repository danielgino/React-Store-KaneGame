import '../styles/ScrollBar.css'
import React, {useState} from "react"

function ScrollBar({products,setProducts,copyArr}){

    const [sortBy,setSortBy]=useState("")

     const sortMethods=(selected)=>{
        let tempSort=[...products]

      
        if(selected==="HighToLow"){
            tempSort.sort((a,b)=> b.price - a.price);
        }
        if(selected==="LowToHigh"){
            tempSort.sort((a,b)=> a.price - b.price);
        }
        if(selected=="None"){
            setProducts(copyArr)
            return
        }
        setProducts(tempSort);
       }
     const handleSortBy = (event) => {
        const selected = event.target.value;
        setSortBy(selected);
        sortMethods(selected); 
      };

    return(
      <div className="scrollbar-container">
        <select value={sortBy} onChange={handleSortBy}>
           <option value="None"> Filter Price By...</option>
           <option value="LowToHigh"> Low to High </option>
           <option value="HighToLow"> High to Low </option>
            </select>
        </div>
    )
}

export default ScrollBar