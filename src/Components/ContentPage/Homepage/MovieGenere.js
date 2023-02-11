import React,{useRef, useState,useEffect} from 'react'
import axios from 'axios';
import Card from './Card'
import { BaseURL, GenereID } from '../../../ApiKeys/Api';

function MovieGenere({item,generID}) {
  
  let [genere,setGenere]=useState([]);

  let list =useRef();

  let ScrollLeft=()=>{
    list.current.scrollLeft=list.current.scrollLeft-200;
  }
  let ScrollRight=()=>{
    list.current.scrollLeft=list.current.scrollLeft+200;
    
  }

  let GetGenere=()=>{
    axios.get(`${BaseURL}${GenereID}${generID}`).then((response)=>{
      console.log(response.data.results);
      setGenere(response.data.results);
    })
  }

  useEffect(()=>{
    GetGenere();
  },[])

  return (
    <div className='w-full h-[44vh] 2xl:h-[40vh] relative'>
      <div className="content p-5 h-full 2xl:px-10">
        <div className="heading h-[20%]">
          <h1 className='text-white font-bold xl:text-2xl'>{item}</h1>
        </div>
        <div className="movies-list flex justify-start items-start h-[80%] overflow-x-scroll lg:overflow-x-hidden scroll-smooth min-w-full duration-300" ref={list} style={{WebkitScrollSnapType:'0px'}}>          
          {
            genere.map((item)=>{
              return(
                <Card item={item}></Card>
              )
            })
          }                                                    
        </div>
        <div className="carousel-button w-full  text-white hidden lg:block">
          <div className="previous-btn absolute top-0 left-0 h-full flex justify-center">
            <button><i class="fa-solid fa-angles-left" onClick={ScrollLeft}></i></button>
          </div>
          <div className="next-btn absolute top-0 right-0  h-full flex justify-center" >
            <button><i class="fa-solid fa-angles-right" onClick={ScrollRight}></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieGenere
