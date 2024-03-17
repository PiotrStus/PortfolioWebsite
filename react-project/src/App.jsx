import './App.css'
import Navbar from './components/Navbar/Navbar';
import Portfolio from './Pages/Portfolio/Portfolio';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter} from "react-router-dom"


function App() {



  return (
    <>
   
       <div className='container'>
        <Navbar />
        <div className='routes'>
            <Home />
            <Portfolio />   
        </div>
        <Footer />
      </div>
   
    </>
  )
}

export default App
