import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/home/Home'
import { Switch, Route } from 'react-router-dom';
import './styles/styles.scss'

function App() {
  return (
    <div>
      <Header/>
      
      <Switch>
        
        <Route path="/" >
          <Home/>
        </Route>
      
      </Switch>
    
      <Footer/>
    </div>
    
  );
}

export default App;
