import React from 'react';
import NavbarLeft from './Elements/navbar-left.js'
import MainPage from './Pages/main-page.js'
import ArtPaget from './Pages/art-page2.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
        <NavbarLeft></NavbarLeft> 
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/art" component={ArtPaget} />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
