
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Create from './components/Create'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/create' element={<Create/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
