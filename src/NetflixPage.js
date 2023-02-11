import React,{useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ContentPage from './Pages/ContentPages/ContentPage'
import UserPage from './Pages/UserPages/UserPage'
import { auth } from './Firebase/Firebase'
import { onAuthStateChanged } from 'firebase/auth'



function NetflixPage() {

  let navigate=useNavigate();

  let CheckUserAlreadySignIn=()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {        
        const uid = user.uid;  
        navigate('/contentpage')      
      } else {
        
      }
    });
  }

  useEffect(()=>{
    CheckUserAlreadySignIn();
  },[])


  

  return (
    <div>      
       <Routes>
        <Route exact path='*' element={<UserPage></UserPage>}></Route>           
        <Route path='/contentpage/*' element={<ContentPage></ContentPage>}></Route>                    
       </Routes>      
    </div>
  )
}

export default NetflixPage
