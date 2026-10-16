import { HashRouter, Route, Routes } from 'react-router-dom'
import { JogoPage } from './pages/JogoPage.jsx'
import { LojaPage } from './pages/LojaPage.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LojaPage />} />
        <Route path="/jogo/:id" element={<JogoPage />} />
      </Routes>
    </HashRouter>
  )
}
