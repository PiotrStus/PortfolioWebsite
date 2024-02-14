import './App.css'
import Navbar from './components/Navbar/Navbar';
import Portfolio from './Pages/Portfolio/Portfolio';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import {Route, Routes, useActionData} from "react-router-dom"
import { useRef } from 'react';

function App() {



  return (
    <>
       <div className='container'>
        <Navbar />
        <div className='routes'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/kontakt" element={<Contact />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
