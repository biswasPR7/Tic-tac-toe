import React from "react";


function box({value,trigger_click}) {
  
    const symbol = value === "x" ? "box x" : "box o" ;
    return(
        <div>
        
        <button className={symbol} onClick={trigger_click} >{value}</button>
        </div>
        
    )
   
}

export default box;
