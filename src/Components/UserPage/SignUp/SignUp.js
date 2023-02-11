import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  let [name,setName]=useState('');
  let [email,setEmail]=useState('');
  let [password,setPassword]=useState('');
  let [emailError,setEmailError]=useState(false);
  let [passwordError,setPasswordError]=useState(false);
  let [nameError,setNameError]=useState(false);
  let passwordInput=useRef();
  let nameInput=useRef();
  let emailInput=useRef();
  let navigate=useNavigate();

  let UserSignUp=(e)=>{    
    e.preventDefault();
    if(name.length<=3){
      setNameError(true);
      setName();
      nameInput.current.value='';
    }
    else if(email.length<11 ){      
      setEmailError(true);
      setEmail();
      emailInput.current.value='';
    }
    else if(password.length<=5){
      setPasswordError(true);
      setPassword();
      passwordInput.current.value='';
    }else{
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {                
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          })
          navigate('/contentpage');            
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;    
          console.log(errorCode);
      });
    }
    
  }

  return (
    <div className='w-full md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/4 min-h-[70vh] md:min-h-[45vh] xl:min-h-[47vh] mx-auto rounded-md bg-[rgba(0,0,0,.7)]'>
      <div className="content w-full h-full p-5 flex flex-col justify-between items-start">
        <div className="heading">
            <h1 className='text-white text-xl font-bold xl:text-2xl'>Sign Up</h1>
        </div>
        <div className="form-sec w-full my-5">
            <form action="" className='w-full'>
                <input className={`w-full my-4 bg-[rgba(51,51,51)] px-2 py-1 rounded-md text-white ${nameError===true ? "placeholder:text-red-600" : 'placeholder:text-[rgba(255,255,255,.6)]'} text-sm h-[40px]`} type="text" placeholder={`${nameError===true ? 'First name must have 5 character' : 'First name'}`} ref={nameInput} onInput={(e)=>{setName(e.target.value)}} />
                <input className={`w-full my-4 bg-[rgba(51,51,51)] px-2 py-1 rounded-md text-white ${emailError===true ? "placeholder:text-red-600" : 'placeholder:text-[rgba(255,255,255,.6)]'} text-sm h-[40px]`} type="email" ref={emailInput}  placeholder={`${emailError===true ? "Enter valid Email Address" : "Email Address"}`} onInput={(e)=>{setEmail(e.target.value)}} />
                <input className={`w-full my-4 bg-[rgba(51,51,51)] px-2 py-1 rounded-md text-white ${passwordError===true ? "placeholder:text-red-600" : 'placeholder:text-[rgba(255,255,255,.6)]'} text-sm h-[40px]`} type="text" placeholder={`${passwordError===true ? "Password must have minimum 5 character" : "Password"}`} ref={passwordInput} onInput={(e)=>{setPassword(e.target.value)}}/>
                <button className='bg-[rgba(229,9,20)] text-white px-2 py-1 h-[40px] w-full rounded-md my-4' onClick={(e)=>{UserSignUp(e)}}>Sign Up</button>
            </form>
        </div>
        <div className="footer-sec">
            <h1 className='text-[#999898] text-sm '>Already a user ? <Link to="/validation" className='text-white'>Sign in now.</Link></h1>
        </div>
      </div>
    </div>
  )
}

export default SignUp
