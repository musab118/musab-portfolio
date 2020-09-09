import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'tachyons';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';




class App extends Component{

  constructor() {
    super();
    
    this.state = {
      route: "",
    }

  }


  render(){
    return(

      <div className ="App">
      <NavBar />
      <Header id ="section1"/>
      <Skills id = "section2"/>
      <Projects id = "section3"/>
      <Contact id = "section4"/>

      </div>
    )

  }



}



export default App;
