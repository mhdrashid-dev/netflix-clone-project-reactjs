import React from 'react'


function Article() {
  return (
    <div className='w-full h-screen shadow-xsInset lg:shadow-lgInset' style={{backgroundImage:"url(https://image.tmdb.org/t/p/original//uDgy6hyPd82kOHh6I95FLtLnj6p.jpg)",backgroundPosition:'center',backgroundSize:"cover"}}>
      <div className="container mx-auto p-5 w-full h-full flex justify-center items-center md:justify-start">
        <div className="movie-info text-white md:w-1/2 ">
            <h1 className='font-bold text-2xl my-2 lg:text-3xl xl:text-4xl 2xl:text-5xl'>Watch Jocker Now</h1>
            <h1 className='text-sm font-light my-3 leading-tight lg:font-normal xl:text-lg 2xl:font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cupiditate similique nostrum temporibus obcaecati enim possimus, aliquid rem alias adipisci. Facere tenetur laborum voluptatum cumque minus consequuntur sit aspernatur reiciendis?</h1>
            <button className='bg-white text-black px-4 py-1 rounded-md my-3 leading-tight xl:text-xl 2xl:font-bold 2xl:px-6'>Play</button>
        </div>
      </div>
    </div>
  )
}

export default Article
