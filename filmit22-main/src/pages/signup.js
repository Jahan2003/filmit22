import React from "react";

import { Link } from "react-router-dom";
const Signup=()=>{
    return (
        <>
        <div id="lo">
        Film<span>It</span>
        </div>
    <div className="box3">
        <div className="box2">
            <h1>Sign Up</h1>
            <form>
            <div>
                <input type="text" id="fname" placeholder="First Name" required/>
                <input type="text" id="lname" placeholder="Last Name"/>
            </div>
            <input type="mail" id="email"  placeholder="Email or phone numer" required/>
            <input type="password" id="password" placeholder="Password" required/>
            <input type="password" id="cpassword" placeholder="Confirm Password" required/>
            <button id="v" ><Link to ={"/"}>Sign Up</Link></button>
            <br/><br/>
            <input type="checkbox" required/>
            <span id="u">Agree to Terms and Conditions</span>
            
            </form>
        </div>
    </div>
    </>
    )   
}
export default Signup