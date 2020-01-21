import React from 'react';
import NavbarLeft from './Elements/navbar-left.js'
import MainPage from './Pages/main-page.js'
import ArtPage from './Pages/art-page.js'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
        <NavbarLeft></NavbarLeft> 
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/art" component={ArtPage} />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
