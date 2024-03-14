
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Experience from './components/experience/Experience';
import FeatureProject from './components/featureProject/FeatureProject';
import OtherProject from './components/otherProject/OtherProject';
import Contact from './components/contact/Contact';
import FetchData from './components/fetchData/FetchData';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
         
         <Header />
         <Routes>
    
         <Route index element={<Intro/>} />
          <Route path='*' element={<Intro />} />
          <Route path='about' element={<About />} />
          <Route path='fetchdata' element={<FetchData />} />
          <Route path='experience' element={<Experience />} />
          <Route path='project' element={<FeatureProject />} />
          <Route path='contact' element={<Contact />} />
         

       </Routes>     
        
       
         </BrowserRouter>  
      
    </div>
  );
}

export default App;
