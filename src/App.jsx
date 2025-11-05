import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Pokedex from './pages/Pokedex'

function App() {
  

  return (
    <>
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/pokedex' element={<Pokedex/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
