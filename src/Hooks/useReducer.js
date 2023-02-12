import React, { useReducer } from 'react';
import './style.css';
const reducer=(state,action)=>{
    if(action.type==='Incr'){
        state += 1 ;
    }
    if(state>0 && action.type==='Decr'){
        state -= 1 ;
    }
    return state;
}

const UseReducer= () => {
    const initialData=0;
    //const [myNum,setMyNum]=React.useState(0);  
    const [state, dispatch]= useReducer(reducer,initialData);  
    //dispatch is used to trigger reducer() and reducer has updated function which changes the value of state

  return (
    <>
    <div className='center_div'>
        <p>{state}</p>
        <div class='button2' onClick={()=>dispatch({type:'Incr'})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCREMENT
        </div>
        <div class="button2" onClick={()=>dispatch({type:'Decr'})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECREMENT
        </div>
    </div>
    </>
  )
}

export default UseReducer;