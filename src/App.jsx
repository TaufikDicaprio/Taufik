import './App.css'
import Home from './pages/Home'
import DetailPortofolio from './pages/DetailPortofolio'
import PageNotFound from './pages/PageNotFound'
import Experience from './pages/Experience'
import {BrowserRouter, Routes, Route, } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/portofolio/:id' element={<DetailPortofolio />} />
        <Route path='/page-not-doound' element={<PageNotFound /> } />
        <Route path='/experience' element={<Experience /> } />     
        <Route path='*' element={<PageNotFound /> } />
  
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App