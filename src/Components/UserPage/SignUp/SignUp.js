import React from 'react'

function SignUp() {
  return (
    <div className='w-full md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/4 min-h-[70vh] md:min-h-[45vh] xl:min-h-[47vh] mx-auto rounded-md bg-[rgba(0,0,0,.7)]'>
      <div className="content w-full h-full p-5 flex flex-col justify-between items-start">
        <div className="heading">
            <h1 className='text-white text-xl font-bold xl:text-2xl'>Sign Up</h1>
        </div>
        <div className="form-sec w-full my-5">
            <form action="" className='w-full'>
                <input className='w-full my-4 bg-[rgba(51,51,51)] px-2 py-1 rounded-md placeholder:text-[rgba(255,255,255,.6)] text-sm h-[40px]' type="text" placeholder='First Name' />
                <input className='w-full my-4 bg-[rgba(51,51,51)] px-2 py-1 rounded-md placeholder:text-[rgba(255,255,255,.6)] text-sm h-[40px]' type="email"  placeholder='Email Address'/>
                <input className='w-full my-4 bg-[rgba(51,51,51)] px-2 py-1 rounded-md placeholder:text-[rgba(255,255,255,.6)] text-sm h-[40px]' type="text" placeholder='Password' />
                <button className='bg-[rgba(229,9,20)] text-white px-2 py-1 h-[40px] w-full rounded-md my-4'>Sign Up</button>
            </form>
        </div>
        <div className="footer-sec">
            <h1 className='text-[#999898] text-sm '>Already a user ? <a href="" className='text-white'>Sign in now.</a></h1>
        </div>
      </div>
    </div>
  )
}

export default SignUp
