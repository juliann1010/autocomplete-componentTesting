import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Autocomplete from './component/autocomplete'
import SearchingPage from './pages/homepage'
import countries from './data/countries'

function App() {

  return (
    
<div className='App'>
  <Autocomplete countries={countries} />
</div>   
      
  )
}

export default App
