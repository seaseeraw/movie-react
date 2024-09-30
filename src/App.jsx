import { useState } from 'react'
// import TitleComponent from './components/TitleComponent'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './components/Hero';
import { Display } from './components/Display';

function App() {
  

  return (
    <>
   
     <div className='wrapper'>
      {/* Hero section */}
<Hero/>
      {/* display section */}
      <Display/>
     </div>

    </>
  )
}

export default App
