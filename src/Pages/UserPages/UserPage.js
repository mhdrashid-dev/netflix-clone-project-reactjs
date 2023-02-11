import React from 'react'
import StartedPage from './Pages/StartedPage'
import ValidationPage from './Pages/ValidationPage'
import { Route, Routes } from 'react-router-dom'

function UserPage() {
  return (
    <>
        <Routes>
          <Route path='/' element={<StartedPage></StartedPage>}></Route>
          <Route path='validation/*' element={<ValidationPage></ValidationPage>}></Route>          
        </Routes>
    </>
  )
}

export default UserPage
