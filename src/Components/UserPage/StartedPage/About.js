import React from 'react'
import Tv from '../../../Images/tv.png'
import TvBG from '../../../Images/netflixtvbg.webp'
import Mobile from '../../../Images/mobile.jpg'
import Children from '../../../Images/Children.png'

function About() {
  return (
    <div className='w-full min-h-[100vh] bg-black'>
        <div className="">
            <div className="about-sec border-b-8 border-[#616161]  py-10  px-5 xl:px-24">
                <div className='container mx-auto lg:flex lg:justify-between lg:items-center'>
                    <div className="content text-center text-white">
                        <h1 className='text-3xl font-bold xl:text-4xl 2xl:text-5xl mb-3'>Enjoy on your TV.</h1>
                        <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                    </div>
                    <div className="img-sec " >
                        <img className='mx-auto outline-8 shadow-2xl' src={Tv} alt="" style={{background:`url('${TvBG}')`,backgroundPosition:'center',backgroundSize:"cover"}} />
                    </div>
                </div>
            </div>
            <div className="about-sec border-b-8 border-[#616161]  py-10  px-5 xl:px-24">
                <div className='container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                    <div className="content text-center text-white lg:order-2">
                        <h1 className='text-3xl font-bold xl:text-4xl 2xl:text-5xl mb-3'>Download your shows to watch offline.</h1>
                        <h3>Save your favourites easily and always have something to watch.</h3>
                    </div>
                    <div className="img-sec lg:order-1" >
                        <img className='mx-auto outline-8 shadow-2xl' src={Mobile} alt="" style={{background:`url('${TvBG}')`,backgroundPosition:'center',backgroundSize:"cover"}} />
                    </div>
                </div>
            </div>
            <div className="about-sec border-b-8 border-[#616161]  py-10  px-5 xl:px-24">
                <div className='container mx-auto lg:flex lg:justify-between lg:items-center'>
                    <div className="content text-center text-white">
                        <h1 className='text-3xl font-bold xl:text-4xl 2xl:text-5xl mb-3'>Create profiles for children.</h1>
                        <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
                    </div>
                    <div className="img-sec " >
                        <img className='mx-auto outline-8 shadow-2xl' src={Children} alt="" style={{background:`url('${TvBG}')`,backgroundPosition:'center',backgroundSize:"cover"}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
