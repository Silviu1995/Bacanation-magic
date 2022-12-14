import React from "react";

const Navbar = ( {onRouteChange,isSignedIn }) => {
       if (isSignedIn) {
        return (
            <nav  style={{display:'flex', justifyContent:'flex-end'}}>
            <p onClick={ () => onRouteChange('signout')} className="f3 pa3 black underline link dim pointer"> Sign Out</p>
            </nav>    
        );
       } else {
        return (
            <nav  style={{display:'flex', justifyContent:'flex-end'}}>
            <p onClick={ () => onRouteChange('signin')} className="f3 pa3 black underline link dim pointer"> Sign In</p>
            <p onClick={ () => onRouteChange('register')} className="f3 pa3 black underline link dim pointer"> Register</p>
            </nav>
            );
       } 
}

export default Navbar;