import "./header-styles.scss"
import { Link } from "react-router-dom";
import { ReactComponent as Logo }  from "../../assets/crown.svg"
import { useEffect, useState } from "react";

const Header=()=>{
   const [classSelected,setClassSelected]=useState("home")
   const url=window.location.pathname
   useEffect(()=>{
    
    if(url==="/")setClassSelected("home")
    else if(url==="/shop")setClassSelected("shop")
    else if(url==="/sign-in")setClassSelected("sign-in")
   },[url])
    return(
        <div className="header">
            <h1><Logo /> Crown Clothing Shop</h1>
            <nav className="navigation_header">
               
                <Link onClick={()=>{
                    setClassSelected("home")
                }} className={`home-${classSelected}`} to="/">
                    Home
                </Link>
                <Link onClick={()=>{
                    setClassSelected("shop")
                }} className={`shop-${classSelected}`} to="/shop">
                    Shop
                </Link>
                <Link onClick={()=>{
                    setClassSelected("sign-in")
                }} className={`sign-${classSelected}`} to="/sign-in">
                    Sign / Log In 
                </Link>
            </nav>
        </div>
    )
}
export default Header;