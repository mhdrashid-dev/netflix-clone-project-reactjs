import React from 'react'
import NetflixPage from './NetflixPage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='*' element={<NetflixPage></NetflixPage>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
