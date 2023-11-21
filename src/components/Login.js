import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true)

    const toggleSignInForm = ()=>{
        setIsSignIn(!isSignIn)
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="background"/>
        </div>
        <form className='absolute p-12 bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4 m-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
            { !isSignIn &&<input type='text' placeholder='Name' className='p-4 m-4 w-full bg-gray-700'/>}
            <input type='text' placeholder='Email Address' className='p-4 m-4 w-full bg-gray-700'/>
            <input type='password' placeholder='Password' className='p-4 m-4 w-full bg-gray-700'/>
            <button className='p-4 m-4 bg-red-700 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now": "Already a User, Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login