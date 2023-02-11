import React,{useRef} from 'react'
import Card from './Card'

function MovieGenere({item}) {

  let list =useRef();

  let ScrollLeft=()=>{
    list.current.scrollLeft=list.current.scrollLeft-200;
  }
  let ScrollRight=()=>{
    list.current.scrollLeft=list.current.scrollLeft+200;
    
  }

  return (
    <div className='w-full h-[44vh] 2xl:h-[40vh] relative'>
      <div className="content p-5 h-full 2xl:px-10">
        <div className="heading h-[20%]">
          <h1 className='text-white font-bold xl:text-2xl'>{item}</h1>
        </div>
        <div className="movies-list flex justify-start items-start h-[80%] overflow-x-scroll lg:overflow-x-hidden scroll-smooth min-w-full duration-300" ref={list} style={{WebkitScrollSnapType:'0px'}}>          
          <Card></Card>
          <Card></Card>                                                        
          <Card></Card>                                                        
          <Card></Card>                                                        
          <Card></Card>                                                        
          <Card></Card>                                                        
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
