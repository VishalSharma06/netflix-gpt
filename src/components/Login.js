import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidaData } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const[errMessage,seterrMessage]=useState(null);
  function toogleSignInForm() {
    setisSignIn(!isSignIn);
  }
  const email = useRef(null);
  const password = useRef(null);
  const name=useRef(null);
  function handleButtonClick() {
    const message = checkValidaData(
      email.current.value,
      password.current.value
    );
    // console.log(message);
    // console.log(email.current.value);
    // console.log(password.current.value);
    seterrMessage(message)
    if(message) return;
    //SignIn and SignUp Logic
    if(!isSignIn){
       //Sign Up Logic
       createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrMessage(errorCode + "-" + errorMessage)
    // ..
  });

    }
    else{
      //Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrMessage(errorCode + "-" + errorMessage)
  });


    }
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700 "
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toogleSignInForm}>
          {isSignIn
            ? "New to Netflix ? Sign up Now"
            : "Already Registered User ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
