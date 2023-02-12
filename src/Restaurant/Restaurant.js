import React from 'react';
import "./Restaurant.css";
import Menu from "./menuAPI";
import MenuCard from './menuCard';
import NavBar from './navBar';
const uniqueArrayOfCategories= ["All",...new Set(Menu.map((currElem)=>{ return currElem.category;}))];
console.log(uniqueArrayOfCategories);
const RestaurantFunction =() =>{
    const [menuData,setMenuData]= React.useState(Menu);   //Hooks ...// using API data
    const [menuList,setMenuList]= React.useState(uniqueArrayOfCategories);

    const filterItem=(category)=>{
        const updatedList= Menu.filter((currentElem)=>{
            return currentElem.category === category;
        })
        setMenuData(updatedList);            //only the selected category will be displayed
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
            
    };
    //props: 
    return(
        <>
        <NavBar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData}/>   
        </>
    );
};
export default RestaurantFunction;