import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div>
    <Button 
    
    text-color={"white"}
    borderColor={"bg-purple-400"}
    bgColor={"bg-purple-400"}
     lebel = "Home Page" />
    
    <Button
    text-color={"green"}
    borderColor={"pink"}
    bgColor={"yellow"}
    lebel = "Contact Us" />
    <Button lebel = "About Us"/>

    {/* <button className="border border-blue-400 rounded-md p-3 m-4">go to home page</button>
    <button className="border border-blue-400 rounded-md p-3 m-4">About Us</button>
    <button className="border border-blue-400 rounded-md p-3 m-4">About Contact</button> */}
    </div>
    </>
  )
}

export default App
