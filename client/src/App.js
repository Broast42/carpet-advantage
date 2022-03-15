import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/home/Home'
import Services from './components/pages/services/Services';
import About from './components/pages/about/About';
import Library from './components/pages/library/Library';
import Camp from './components/pages/camp/Camp';
import Request from './components/pages/request/Request';
import BeforAndAfter from './components/pages/before-after/BeforeAndAfter';
import { Routes, Route } from 'react-router-dom';
import './styles/styles.scss'

function App() {
  return (
    <div>
      <Header/>
      
      <Routes>

        <Route path="/beforeandafter" element={<BeforAndAfter/>}/>
        <Route path="/camp" element={<Camp/>} />
        <Route path="/request" element={<Request/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/" element={ <Home/>}/>
    
      </Routes>
    
      <Footer/>
    </div>
    
  );
}

export default App;
