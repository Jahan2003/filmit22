import { Link } from "react-router-dom"
import '../style.css'
import React from "react"
var i=1;
const Signin=()=>{
    
    return (
        <>
        <div id="lo">
        Film<span>It</span>
        </div>
        
        <div className="box">
        <div className="box2">
            <h1>Sign In</h1>
            <form action="/movie">
            <input type="mail" id="email" placeholder="Email or phone numer" required/>
            <input type="password" id="password" placeholder="Password" required/>
            <button className="class">Sign In</button>
            <br/><br/>
            <input type="checkbox"/>
            <span id="r"> Remember me</span>
            <span id="h"> Need Help?</span>
            <br/><br/>
            <div id="n">New to FilmIt ?<Link to={"/signup"}> Sign up now</Link></div>
            </form>
        </div>
    </div>
    </>
    )
}
export default Signin
