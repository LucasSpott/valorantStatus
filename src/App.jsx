import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Eventos from './Eventos/Eventos'
import ChampionsEvento from './Eventos/EventoChampions/ChampionsEvento'

function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Eventos/Champions" element={<ChampionsEvento />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
