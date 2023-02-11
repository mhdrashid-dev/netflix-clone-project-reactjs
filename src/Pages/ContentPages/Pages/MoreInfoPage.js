import React from 'react'
import { useLocation } from 'react-router-dom';
import { imageURL } from '../../../ApiKeys/Api';
import { useNavigate } from 'react-router-dom';

function MoreInfoPage() {

    let location=useLocation();
    let navigate=useNavigate();    

    let GotoContentPage=()=>{
        navigate('/contentpage');
    }
    
  return (
    <div className='w-full h-screen bg-black'>
        <div className="content w-full h-full flex flex-col lg:flex-row justify-between items-center lg:container lg:mx-auto lg:px-20">
            <div className="image-sec w-full rounded-md overflow-hidden p-2  h-2/6 lg:w-1/3 lg:h-5/6 ">
                <img className='w-full h-full object-cover rounded-md' src={imageURL+location.state.backdrop_path} alt="" />
            </div>
            <div className="info-sec w-full  px-3 h-4/6 flex flex-col justify-center lg:w-2/3 lg:h-full lg:pl-32">
                <h1 className='text-white font-bold text-xl text-center xl:text-3xl'>{location.state.original_title || location.state.original_name}</h1>
                <h1 className='text-center text-white my-5 text-sm font-bold underline xl:text-base'>Overview</h1>   
                <div className="movie-overview w-full ">
                    <div className="description w-full flex justify-between items-start mt-3">
                        <h1 className='w-1/4 text-white text-sm xl:text-base'>Title: </h1>
                        <h1 className='text-white text-[.75rem] xl:text-[.8rem] ml-2 text-start w-3/4'>{location.state.original_title || location.state.original_name}</h1>
                    </div>                   
                    <div className="description w-full flex justify-between items-start mt-3">
                        <h1 className='w-1/4 text-white text-sm xl:text-base'>Description: </h1>
                        <h1 className='text-white text-[.75rem] xl:text-[.8rem] ml-2 text-start w-3/4'>{location.state.overview}</h1>
                    </div>
                    <div className="description w-full flex justify-between items-start mt-3">
                        <h1 className='w-1/4 text-white text-sm xl:text-base'>Type: </h1>
                        <h1 className='text-white text-[.75rem] xl:text-[.8rem] ml-2 text-start w-3/4'>Movie</h1>
                    </div>
                    <div className="description w-full flex justify-between items-start mt-3">
                        <h1 className='w-1/4 text-white text-sm xl:text-base'>Release date: </h1>
                        <h1 className='text-white text-[.75rem] xl:text-[.8rem] ml-2 text-start w-3/4'>{location.state.release_date}</h1>
                    </div>
                    <div className="description w-full flex justify-between items-start mt-3">
                        <h1 className='w-1/4 text-white text-sm xl:text-base'>rating: </h1>
                        <h1 className='text-white text-[.75rem] xl:text-[.8rem] ml-2 text-start w-3/4'>{location.state.vote_average}</h1>
                    </div>
                    <div className="home-btn mt-7 w-full flex justify-center items-center">
                        <button className='text-white bg-[rgba(229,9,20)] rounded-md px-3 py-1 text-sm font-bold' onClick={GotoContentPage} >BACK HOME</button>
                    </div>     
                </div>                      
                
            </div>
        </div>
      
    </div>
  )
}

export default MoreInfoPage
