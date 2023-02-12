import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../Firebase/Firebase'

function Login() {

  let [email,setEmail]=useState('');
  let [emailError,setEmailError]=useState('');
  let [passwordError,setPasswordError]=useState('')
  let [isEmailError,setIsEmailError]=useState(false);
  let [isPasswordError,setIsPasswordError]=useState(false);
  let [password,setPassword]=useState('');
  let emailInput=useRef();
  let passwordInput=useRef();
  let navigate=useNavigate();

  let UserLogin=(e)=>{        
    e.preventDefault();    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {                
        const user = userCredential.user;     
        navigate('/contentpage')   
      })
      .catch((error) => {
        const errorCode = error.code;        
        if(errorCode==="auth/invalid-email"){
          setEmailError("Enter valid Email Address");
          setIsEmailError(true);
          emailInput.current.value='';
          setEmail();
        }else if(errorCode==='auth/internal-error'){
          setPasswordError("Please Enter Valid Password");
          setIsPasswordError(true);
          passwordInput.current.value="";
          setPassword();
        }else if(errorCode==='auth/wrong-password'){
          setPasswordError("Passoword is Incorrect");
          setIsPasswordError(true);
          passwordInput.current.value="";
          setPassword();
        }else if(errorCode==='auth/user-not-found'){
          setEmailError("Email is not-found");
          setPasswordError("Password is not-found");
          emailInput.current.value='';
          passwordInput.current.value="";
          setIsEmailError(true);
          setIsPasswordError(true);
          setEmail();
          setPassword();
        }
        
    });

  }


  return (
    <div className='w-full md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/4 min-h-[70vh] md:min-h-[45vh] xl:min-h-[47vh] mx-auto rounded-md bg-[rgba(0,0,0,.7)]'>
      <div className="content w-full h-full p-5 flex flex-col justify-between items-start">
        <div className="heading">
            <h1 className='text-white text-xl font-bold xl:text-2xl'>Log in</h1>
        </div>
        <div className="form-sec w-full my-5">
            <form action="" className='w-full'>                
                <input ref={emailInput} className={`w-full my-4 bg-[rgba(51,51,51)] px-2 py-1 rounded-md text-white ${isEmailError===true ? "placeholder:text-red-600" : "placeholder:text-[rgba(255,255,255,.6)]"} text-sm h-[40px]`} type="email"  placeholder={`${isEmailError===true ? emailError : 'Email Address' }`} onInput={(e)=>{setEmail(e.target.value)}}/>
                <input ref={passwordInput} className={`w-full my-4 bg-[rgba(51,51,51)] px-2 py-1 rounded-md text-white ${isPasswordError===true ? "placeholder:text-red-600" : "placeholder:text-[rgba(255,255,255,.6)]"} text-sm h-[40px]`} type="text" placeholder={`${isPasswordError===true ? passwordError : "Password"}`} onInput={(e)=>{setPassword(e.target.value)}} />
                <button className='bg-[rgba(229,9,20)] text-white px-2 py-1 h-[40px] w-full rounded-md my-4' onClick={(e)=>{UserLogin(e)}} >Log in</button>
            </form>
        </div>
        <div className="footer-sec">
            <h1 className='text-[#999898] text-sm '>New to Netflix ? <Link to="/validation/signup" className='text-white'>Sign Up now.</Link></h1>
        </div>
      </div>
    </div>
  )
}

export default Login
