
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
 import WatchHistory  from './pages/WatchHistory'

function App() {


  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/history' element={<WatchHistory />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
