import React from 'react'
import Login from '../../../Components/UserPage/Login/Login'
import SignUp from '../../../Components/UserPage/SignUp/SignUp'
import ValidationBG from '../../../Images/UserpageBG.jpg'
import { Route, Routes } from 'react-router-dom'

function ValidationPage() {
  return (
    <div className='w-full h-screen shadow-xsInset lg:shadow-lgInset' style={{backgroundImage:`url("${ValidationBG}")`,backgroundPosition:"center",backgroundSize:"cover"}}>
      <div className="contianer mx-auto px-3 md:px-10 lg:px-28 2xl:px-48 w-full h-full flex justify-center items-center">
        <Routes>
          <Route path='signup' element={<SignUp></SignUp>}></Route>        
          <Route path='/' element={<Login></Login>}></Route>                
        </Routes>
      </div>
    </div>
  )
}

export default ValidationPage
