import React from 'react'
import ContentPage from './Pages/ContentPages/ContentPage'
import UserPage from './Pages/UserPages/UserPage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function NetflixPage() {
  return (
    <div>
      <Router>
       <Routes>
        <Route exact path='*' element={<UserPage></UserPage>}></Route>           
        <Route path='/contentpage/*' element={<ContentPage></ContentPage>}></Route>                    
       </Routes>
      </Router>
    </div>
  )
}

export default NetflixPage
