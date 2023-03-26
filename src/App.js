import { Routes, Route } from 'react-router-dom';
import Door_Stop from "./Components/Door_Stop";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Home from './Components/Home';
function App() {
  return (
    <>
 
    <div className="App">
    
     
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Door_Stop />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        
       
        </Routes>
      
    </div>
    </>
  );
}

export default App;
