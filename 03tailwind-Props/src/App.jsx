import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    Username : "Pritam@2005",
    password : 8250036245
  }

  return (
    <>
                    
    <Card Username="Pritam dutta"/>
    <Card Username="Rony dutta"/>
 
    

    </>
  )
}

export default App
