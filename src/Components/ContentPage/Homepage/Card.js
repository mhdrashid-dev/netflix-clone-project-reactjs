import React from 'react'

function Card() {
  return (
    <div className='min-w-[50%] md:min-w-[35%] lg:min-w-[25%] 2xl:min-w-[17%] h-full mr-5 duration-200'>
      <div className="card-inside w-full h-full rounded-md overflow-hidden">
        <img src="https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg" alt="" className='w-full h-full object-cover duration-300 hover:scale-105' />
      </div>
    </div>
  )
}

export default Card
