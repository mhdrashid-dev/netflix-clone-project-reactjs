import React from 'react'
import HomeBG from '../../../Images/UserpageBG.jpg'
import Logo from '../../../Images/Logo.png'

function Home() {
  return (
    <div className='w-full border-b-8 shadow-xsInset lg:shadow-lgInset border-[#616161] h-[80vh] md:h-[50vh] lg:h-[90vh] bg-homeBG' style={{background:`url("${HomeBG}")`,backgroundPosition:"center",backgroundSize:"cover"}}>       
      <div className="container mx-auto px-5 lg:px-28 xl:px-48 py-5 lg:py-10 h-full w-full">
        <div className="navbar flex justify-between items-center ">
          <div className="logo w-[100px] xl:w-[150px]">
            <img src={Logo} alt="" />
          </div>
          <div className="navlink">
            <ul className='flex justify-center items-center'>
              <li className='border border-white rounded-md text-white px-2 lg:py-1 mx-3'>English</li>
              <li className='bg-[rgba(229,9,20)] border border-[rgba(229,9,20)] rounded-md text-white px-2 lg:py-1 xl:mx-3'>Sign in</li>
            </ul>
          </div>
        </div>
        <div className="content flex flex-col justify-center items-center h-full w-full">
          <div className="heading text-white text-center">
            <h1 className='text-3xl font-bold mb-4 xl:text-5xl'>Unlimited movies, TV shows and more.</h1>
            <h3 className='font-semibold text-lg mb-3 xl:text-xl'>Watch anywhere. Cancel anytime.</h3>
            <h5 className='text-lg mb-3 xl:text-xl'>Ready to watch? Enter your email to create or restart your membership.</h5>
          </div>
          <div className="email-sec my-4 xl:my-8 xl:w-full">
            <div className='flex flex-col justify-center xl:w-full'>
              <input className='w-full xl:w-1/2 xl:mx-auto bg-[rgba(0,0,0,.5)] border border-[#535252] rounded-md px-3 py-2 text-lg font-semibold ' type="text"  placeholder='Email address'/>
              <button className='bg-[rgba(229,9,20)] text-white w-1/2 xl:w-1/5 mx-auto my-3 py-2 rounded-md lg:text-lg lg:font-bold'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
