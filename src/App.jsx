import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Pages & Components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './components/About'


const App = () => {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
            <Route 
              path="/" 
              element={<Home/>} 
            />
            <Route
              path="/about"
              element={<About />}
            />
         </Routes>
      </div>
    </BrowserRouter>
    </>
   
  )
}

export default App
