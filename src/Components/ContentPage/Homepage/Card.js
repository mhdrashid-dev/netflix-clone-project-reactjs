import React from 'react'
import { imageURL } from '../../../ApiKeys/Api';
import { useNavigate } from 'react-router-dom';


function Card({item}) {  

  let navigate=useNavigate();

  let MoreInfo=(item)=>{
    navigate('/contentpage/moreinfopage',{state:item});    
  }

  return (
    <div className='min-w-[50%] md:min-w-[35%] lg:min-w-[25%] 2xl:min-w-[17%] h-full mr-5 duration-200'>
      <div className="card-inside w-full h-full rounded-md overflow-hidden">
        <img src={imageURL+item.backdrop_path} alt="" className='w-full h-full object-cover duration-300 hover:scale-105' onClick={()=>{MoreInfo(item)}} />
      </div>
    </div>
  )
}

export default Card
