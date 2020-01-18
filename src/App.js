import React from 'react';
import NavbarLeft from './Elements/navbar-left.js'
import MainPage from './Pages/main-page.js'
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavbarLeft></NavbarLeft>
      <MainPage></MainPage>

    </div>
  );
}

export default App;
