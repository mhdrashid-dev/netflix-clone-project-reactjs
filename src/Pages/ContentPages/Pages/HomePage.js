import React from 'react'
import Logo from '../../../Images/Logo.png'
import Article from '../../../Components/ContentPage/Homepage/Article'

function HomePage() {
  return (
    <div className='w-full min-h-[100vh] bg-black relative'>
        <div className="navbar absolute top-0 left-0 w-full h-[10vh] bg-transparent">
            <div className='container mx-auto w-full h-full flex justify-between items-center p-5'>
                <div className="logo-sec w-[80px]">
                    <img src={Logo} alt="" />
                </div>
                <div className="user">
                    <h1></h1>
                </div>
            </div>            
        </div>
        <div className="article-sec">
            <Article></Article>
        </div>
        <div className="card-sec">

        </div>
    </div>
  )
}

export default HomePage
