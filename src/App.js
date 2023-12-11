import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Comonents/Nav';
import Home from './Comonents/Home';
import Education from './Comonents/Education';
import Project from './Comonents/Project';
import Technologies from './Comonents/Technologies';
import Footer from './Comonents/Footer';
import About from './Comonents/About';
import Contact from './Comonents/Contact';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'


function App() {
 
  return (
    <>
  
     <BrowserRouter> 
       <Nav></Nav>

   <Routes>
    
    <Route path="/" element={<Home />  }/>

    <Route path="/About" element={<About/>}/>
    <Route path="/Education" element={<Education/>}/>
    <Route path="/Technology" element={<Technologies/>}/>
    <Route path="/Project" element={<Project/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    
 
 
  </Routes>
  </BrowserRouter>
 
  <Footer/>
 


 
 </>

  );
}

export default App;
