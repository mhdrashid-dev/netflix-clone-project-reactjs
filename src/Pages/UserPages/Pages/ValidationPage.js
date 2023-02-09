import React from 'react'
import Login from '../../../Components/UserPage/Login/Login'
import SignUp from '../../../Components/UserPage/SignUp/SignUp'
import ValidationBG from '../../../Images/UserpageBG.jpg'

function ValidationPage() {
  return (
    <div className='w-full h-screen shadow-xsInset lg:shadow-lgInset' style={{backgroundImage:`url("${ValidationBG}")`,backgroundPosition:"center",backgroundSize:"cover"}}>
      <div className="contianer mx-auto px-3 md:px-10 lg:px-28 2xl:px-48 w-full h-full flex justify-center items-center">
        {/* <SignUp></SignUp> */}
        <Login></Login>
      </div>
    </div>
  )
}

export default ValidationPage
