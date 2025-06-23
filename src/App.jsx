import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Compinent/Footer'
import Header from './Compinent/Header'
import Home from './Compinent/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
  <Header/>
  <Home/>
   <Footer/>
    </>
  )
}

export default App
