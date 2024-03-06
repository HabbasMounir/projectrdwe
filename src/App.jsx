import { useState  } from 'react'
import './App.css'
import Cursor from './cursor';
import { Routes,Route, useLocation } from 'react-router-dom'
import Home from './pages/home/home';

function App() {
  const [dataState, setDataState] = useState("waite")
  const location = useLocation();
  return (
    <>
      <Cursor ele="a,button,hover"/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="*" element={<h1>404</h1>} />
      </Routes>
      
    </>
  )
}

export default App
