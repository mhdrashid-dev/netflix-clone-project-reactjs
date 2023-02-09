import React from 'react'

function Footer() {
  return (
    <div className='footer w-full min-h-[40vh] bg-black py-10'>
        <div className="container mx-auto px-3 lg:px-20 xl:px-36">
            <div className="heading text-start text-white">
                <h1 className='text-sm text-[rgba(255,255,255,.7)]'>Questions? Call <a href="" className='underline'>000-800-919-1694</a></h1>
            </div>
            <div className='text-[rgba(255,255,255,.6)] text-sm mt-10 w-full h-full md:grid md:grid-cols-3 mx-auto'>
                <div className="lists">
                    <ul>
                        <li className='my-2'><a href="" className='underline'>FAQ</a></li>
                        <li className='my-2'><a href="" className='underline'>Account</a></li>
                        <li className='my-2'><a href="" className='underline'>Jobs</a></li>
                        <li className='my-2'><a href="" className='underline'>Privacy</a></li>
                        <li className='my-2'><a href="" className='underline'>Contact Us</a></li>
                        <li className='my-2'><a href="" className='underline'>Only on netflix</a></li>
                    </ul>
                </div>
                <div className="lists">
                    <ul>
                        <li className='my-2'><a href="" className='underline'>Gift Card Terms</a></li>
                        <li className='my-2'><a href="" className='underline'>Media Center</a></li>
                        <li className='my-2'><a href="" className='underline'>Ways to Watch</a></li>
                        <li className='my-2'><a href="" className='underline'>Cookie Preference</a></li>
                        <li className='my-2'><a href="" className='underline'>Speed Test</a></li>                    
                    </ul>
                </div>
                <div className="lists">
                    <ul>
                        <li className='my-2'><a href="" className='underline'>Help Center</a></li>
                        <li className='my-2'><a href="" className='underline'>Investor Relations</a></li>
                        <li className='my-2'><a href="" className='underline'>Terms of Use</a></li>
                        <li className='my-2'><a href="" className='underline'>Coorpereate Information</a></li>
                        <li className='my-2'><a href="" className='underline'>Legal Notice</a></li>                    
                    </ul>
                </div>
            </div>
            <div className="footer-text mt-10">
                <h1 className='text-[rgba(255,255,255,.7)]'>Netflix India</h1>
            </div>
        </div>      
    </div>
  )
}

export default Footer
