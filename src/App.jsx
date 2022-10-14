import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Episode0 from './episodes/episode0'
import Home from './episodes/home'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/episode-0" element={<Episode0 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
