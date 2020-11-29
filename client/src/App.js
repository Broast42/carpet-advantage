import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/home/Home'
import Services from './components/pages/services/Services';
import About from './components/pages/about/About';
import Library from './components/pages/library/Library';
import { Switch, Route } from 'react-router-dom';
import './styles/styles.scss'

function App() {
  return (
    <div>
      <Header/>
      
      <Switch>

        <Route path="/library">
          <Library/>
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/services">
          <Services/>
        </Route>
        
        <Route path="/" >
          <Home/>
        </Route>
      
      </Switch>
    
      <Footer/>
    </div>
    
  );
}

export default App;
