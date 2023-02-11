import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseURL, imageURL, trendingKEY } from '../../../ApiKeys/Api'

function Article() {
  
  let [trendingMovie,setTrendingMovie]=useState(null);

  let GetTrendingData=()=>{
      let randomNumber=Math.floor(Math.random()*21);
      axios.get(`${BaseURL}${trendingKEY}`).then((response)=>{  
        setTrendingMovie(response.data.results[randomNumber]); 
      })
  }

  useEffect(()=>{
    GetTrendingData();
  },[])

  

  return (
    <>
    {trendingMovie!==null ?    
      <div className='w-full h-screen shadow-xsInset lg:shadow-lgInset' style={{backgroundImage:`url(${imageURL}${trendingMovie.backdrop_path})`,backgroundPosition:'center',backgroundSize:"cover"}}>
        <div className="container mx-auto p-5 w-full h-full flex justify-center items-center md:justify-start">
          <div className="movie-info text-white md:w-1/2 ">
              <h1 className='font-bold text-2xl my-2 lg:text-3xl xl:text-4xl 2xl:text-5xl'>Watch { trendingMovie.name || trendingMovie.original_title}</h1>
              <h1 className='text-sm font-light my-3 leading-tight lg:font-normal xl:text-lg 2xl:font-semibold'>{trendingMovie.overview}</h1>
              <button className='bg-white text-black px-4 py-1 rounded-md my-3 leading-tight xl:text-xl 2xl:font-bold 2xl:px-6'>Play</button>
          </div>
        </div>
      </div>
      :
      <>
        <div className='w-full h-screen bg-black flex justify-center items-center'>
          <div className="lds-facebook inline-block relative w-[80px] h-[80px]">
            <div className='inline-block absolute left-[8px] w-[12px] bg-[rgba(229,9,20)] animate-spinner' style={{animationDelay:'-0.24s'}}></div>
            <div className='inline-block absolute left-[32px] w-[12px] bg-[rgba(229,9,20)] animate-spinner' style={{animationDelay:'-0.12s'}}></div>
            <div className='inline-block absolute left-[56px] w-[12px] bg-[rgba(229,9,20)] animate-spinner' style={{animationDelay:'0s'}}></div>
          </div>
        </div>
      </>
      }
    </>
    
  )
}

export default Article
