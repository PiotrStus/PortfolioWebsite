import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/omnie" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/kontakt" element={<Contact />}></Route>
      </Routes>
      </div>
    </>
  )
}

export default App
