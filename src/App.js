import React from 'react';
import './App.css';
import Header from './components/CGRWebComponents/header';
import Aboutus from './components/CGRWebComponents/About us';
import Contactus from './components/CGRWebComponents/Contact us';
import Home from './components/CGRWebComponents/Home';
import Products from './components/CGRWebComponents/Products';
import Projects from './components/CGRWebComponents/Projects';
import Services from './components/CGRWebComponents/Services';
import Navbar from './components/CGRWebComponents/Navbar.js'
import CGRFooter from './components/CGRWebComponents/Footer'


import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
        
        <Header/>
        <Navbar />
       
        <div className='content'>
        <Switch>  
           <Route path="/" exact component={Home} />
           <Route path="/services" component={Services}/>
           <Route path="/projects" component={Projects}/>
           <Route path="/products" component={Products}/> 
           <Route path="/about"    component={Aboutus}/>
           <Route path="/contact" component={Contactus}/>
        </Switch>
        </div>

        <CGRFooter />

          
      </div>
    </Router> 
       
       
      
  );
}

export default App;
