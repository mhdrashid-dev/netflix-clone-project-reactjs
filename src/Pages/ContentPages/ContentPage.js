import React from 'react'
import HomePage from './Pages/HomePage'
import MoreInfoPage from './Pages/MoreInfoPage'
import { Route, Routes } from 'react-router-dom'

function ContentPage() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>        
        <Route path='/moreinfopage' element={<MoreInfoPage></MoreInfoPage>}></Route>             
      </Routes>
    </div>
  )
}

export default ContentPage
