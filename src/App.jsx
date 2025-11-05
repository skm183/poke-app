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
        <Route path='/poke-app/' element={<Home/>} />
        <Route path='/poke-app/quiz/' element={<Quiz/>} />
        <Route path='/poke-app/pokedex/' element={<Pokedex/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
