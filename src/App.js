
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

function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Header></Header>    
         <Intro></Intro>
         <About></About>
         <Experience></Experience>
         <FeatureProject></FeatureProject>
         <OtherProject></OtherProject>
         <Contact></Contact>
         <Routes>
    
    {/* <Route path="/" element={<Layout />}></Route> */}
    </Routes>     
        
       
         </BrowserRouter>  
      
    </div>
  );
}

export default App;
