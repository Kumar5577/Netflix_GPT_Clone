import Header from "./Header";
import { login_bg_img } from "../utils/links";
import { useState } from "react";
const Login = ()=>{
    const [isSignIn,setIsSignIn] = useState(true);
    const handleClick = ()=>{
        setIsSignIn(!isSignIn);
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src={login_bg_img} alt="Back-Ground Image"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
            <h1 className="py-4 w-full font-bold text-3xl">{isSignIn?"Sign In":"Sign Up"}</h1>
            {!isSignIn && <input type="text" placeholder="Full Name" className="my-2 w-full p-4 bg-gray-700"/>}
                <input type="text" placeholder="Email Address" className="my-2 w-full p-4 bg-gray-700"/>
                <input type="password" placeholder="Password" className="my-2 w-full p-4 bg-gray-700"/>
                <button className="my-4 p-4 bg-red-700 w-full rounded-xl">{isSignIn?"Sign In":"Sign Up"}</button>
                <p  className="py-4 font-bold cursor-pointer" onClick={handleClick}>{isSignIn?"New to Netflix? Signup Now":"Already Singed Up? Please Sign In"}</p>
            </form>
        </div>
    )
}
export default Login;

