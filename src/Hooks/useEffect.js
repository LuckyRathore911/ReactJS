import React, { useState, useEffect } from 'react';
import './style.css';
const UseEffect = () => {
    
    const initialData=0;
    const [myNum,setMyNum]=useState(initialData);  // myNum=initialData and setMyNum is a function which changes value of myNum
    
    useEffect(()=>{
        // effect 
        // return()=>{
        //     cleanup
        // };
        //console.log("luck")
        document.title= `Chats(${myNum})`;
    });

    return (
    <>
    <div className='center_div'>
        <p>{myNum}</p>
        <div class='button2' onClick={()=>setMyNum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCREMENT
        </div>
    </div>
    </>
  )
}

export default UseEffect;