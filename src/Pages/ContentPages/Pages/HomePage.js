import React, { useState } from 'react'
import Logo from '../../../Images/Logo.png'
import Article from '../../../Components/ContentPage/Homepage/Article'
import MovieGenere from '../../../Components/ContentPage/Homepage/MovieGenere'

function HomePage() {

    let [genere,setGenere]=useState(['Action',"Family","Horror","Thriller","Adventure","Animation","Comedy","Drama","Crime","War","Documentry"]);

  return (
    <div className='w-full min-h-[100vh] bg-black relative'>
        <div className="navbar absolute top-0 left-0 w-full h-[10vh] bg-transparent">
            <div className='container mx-auto w-full h-full flex justify-between items-center p-5 ='>
                <div className="logo-sec w-[80px] md:w-[120px] lg:w-[100px] xl:w-[130px]">
                    <img src={Logo} alt="" />
                </div>
                <div className="user text-white flex justify-center items-center md:text-xl">
                    <h1><i class="fa-solid fa-user mr-2"></i></h1>
                    <h1>Rashid</h1>
                </div>
            </div>            
        </div>
        <div className="article-sec">
            <Article></Article>
        </div>
        <div className="card-sec py-10">
            {
                genere.map((item)=>{
                    return(
                        <MovieGenere item={item} ></MovieGenere>
                    )
                })
            }
        </div>
    </div>
  )
}

export default HomePage
