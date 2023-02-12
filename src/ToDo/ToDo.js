import React, {useState, useEffect} from 'react';
import './ToDo.css'
document.title='To Do List App';
//get local storage data back
const getLocalData=()=>{
    const lists= localStorage.getItem("mytodolist");
    if(lists)
        return JSON.parse(lists); //convert to array
    else
        return [];
}

const ToDo = () => {
  const[inputData,setInputData]= useState("");
  const[items,setItems]=useState(getLocalData());
  const[isEditItem,setIsEditItem]=useState("");
  const[toggleButton, setToggleButton]= useState(false);

  const addItem=()=>{
    if(!inputData)
        alert("Empty Data Field");
    else if(inputData && toggleButton){
        setItems(
            items.map(curElem=>{
                if(curElem.id===isEditItem)
                    return {...curElem,name:inputData};
                return curElem;
            })
        );
        setInputData("");           //to clear the input box
        setIsEditItem(null);       
        setToggleButton(false);   //to change the icon again to plus
    }
    else{
        const myInputData={
            id: new Date().getTime().toString(),        //to associate unique id with each item
            name:inputData
        };
        setItems([...items,myInputData]); 
        setInputData("");
    }
  }

  const editItem=(index)=>{
    const item_todo_edited= items.find(curElem=>{
        return curElem.id ===index;
    });
    setInputData(item_todo_edited.name); // to paste the item selected, in the input box
    setIsEditItem(index);
    setToggleButton(true);
  };

  const deleteItem=(index)=>{
    const updatedItems= items.filter(curElem=>{
        return (curElem.id !== index);      //return all elements except the one selected to be deleted
    });
    setItems(updatedItems);
  }
  const removeAll=()=>{
    setItems([]);
  }

  //Local storage
  useEffect(()=>{
    localStorage.setItem("mytodolist",JSON.stringify(items));
  },[items])

  return (
    <>
    <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src='./images/todo.jpeg' alt='ToDoLogo'></img>
                <figcaption>Add Your List Here 👇</figcaption>
            </figure>
            <div className='addItems'>
                <input type="text" placeholder="✍️ Add Item " 
                    className='form-control'
                    value={inputData}
                    onChange={(event)=>{setInputData(event.target.value)}}>
                </input>
                {toggleButton?(<i className="fa fa-edit add-btn" onClick={addItem}></i>):(<i className="fa fa-plus add-btn" onClick={addItem}></i>)}
                
            </div>
            <div className='showItems'>
                {items.map((curElem)=>{
                    return(
                    <div className='eachItem' key={curElem.id}>
                        <h3>{curElem.name}</h3>
                        <div className='todo-btn'>
                            <i className="far fa-edit add-btn" onClick={()=>editItem(curElem.id)}></i>
                            <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curElem.id)}></i>
                        </div>
                    </div>
                    );
                })}
            </div>
            <div className='showItems'>
                <button className='btn effect04' data-sm-link-text="REMOVE ALL" onClick={removeAll}><span>CHECK LIST</span></button>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default ToDo;