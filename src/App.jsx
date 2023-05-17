import React ,{ useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/Homepage/Homepage'

const App = ()=> {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <Homepage />
      </div>
      
    </>
  
  )
}

export default App
