import React from 'react'
import Login from "./Login"
import {BrowserRouer, Routes,Route, BrowserRouter} from 'react-router-dom'
import Signup from "./Signup"



function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}></Route>
    
<Route path='/SignUp' element={<Signup/>}></Route>
    
   </Routes>
     
    </BrowserRouter>
  )
}

export default App
