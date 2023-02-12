import React, { useEffect, useState } from 'react'
import Logo from '../../../Images/Logo.png'
import Article from '../../../Components/ContentPage/Homepage/Article'
import MovieGenere from '../../../Components/ContentPage/Homepage/MovieGenere'
import { auth } from '../../../Firebase/Firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { async } from '@firebase/util'


function HomePage() {

    let [active,setActive]=useState(false);
    let genere=['Action',"Family","Horror","Thriller","Adventure","Animation","Comedy","Drama","Crime","War","Documentry"];
    let generID=[28,10751,27,53,12,16,35,18,80,10752,99];
    let navigate=useNavigate();
    let [userName,setUserName]=useState(null);    

    
   
    let GetUserData=()=>{        
        onAuthStateChanged(auth, async(user) => {
            try{
                if (user) {                            
                    setUserName(user.displayName)
                } else {
                  
                }
            }catch(error){

            }
          });
    }

    useEffect(()=>{        
        if(userName===null){
            setTimeout(()=>{
                GetUserData();
            },1000)
        }
    })

    let UserLogOut=()=>{        
        signOut(auth).then(() => {   
            navigate('/validation');
        }).catch((error) => {
        
        });
    }

  return (
    <>
        {
            userName !==null ? 
            <>
                <div className='w-full min-h-[100vh] bg-black relative'>
                    <div className="navbar absolute top-0 left-0 w-full h-[12vh] bg-transparent">
                        <div className='container mx-auto w-full h-full flex justify-between items-center p-5 relative'>
                            <div className="logo-sec w-[80px] md:w-[120px] lg:w-[100px] xl:w-[130px]">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="user text-white flex justify-center items-center md:text-xl cursor-pointer" onClick={()=>{setActive(!active)}}>
                                <h1><i className="fa-solid fa-user mr-2"></i></h1>
                                <h1 className='select-none'>{userName}</h1>
                            </div>
                            <div className={`log-out-sec absolute top-20 right-4 ${active===true ? 'block' : 'hidden'}`}>
                                <button className='text-white bg-red-600 rounded-md px-3 py-1 text-sm font-bold' onClick={UserLogOut}>Logout</button>
                            </div>
                        </div>            
                    </div>
                    <div className="article-sec">
                        <Article></Article>
                    </div>
                    <div className="card-sec py-10">
                        {
                            genere.map((item,key)=>{
                                return(
                                    <MovieGenere item={item} generID={generID[key]} key={key}></MovieGenere>
                                )
                            })
                        }
                    </div>
                </div>
            </>
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

export default HomePage
