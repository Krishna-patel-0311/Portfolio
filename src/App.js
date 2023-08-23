import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useEffect } from 'react';
import Header from './Components/Header';
import Interest from './Components/Interest';
import Education from './Components/Education';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Project from './Components/Project';
function App() {
  useEffect(()=>{
    Aos.init({
      duration: 700, 
  easing: 'ease', 
  once: false,
    })
  })
  return (
    <div className="App">
     <Header/>
     <About/>
     <Education/>
     <Interest/>
     {/* <Certificates/> */}
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
