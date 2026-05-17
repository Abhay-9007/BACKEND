import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Feed from "./components/Feed"
import Create from './components/Create'

function App() {
  return (
    <>
    {/* <h1>hello World</h1> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/post" element={<Create/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
