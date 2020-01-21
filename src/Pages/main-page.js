import React, { Component } from 'react';
import DigitalProfile from '../me-digital-v2.2.png';

const digitalprofile = {
    bottom: "0",
    position: "fixed",
    width: "60%",
    right:"50px"
}

const mainparagraph = {
    maxWidth: "20rem",
    marginLeft: "auto",
    fontSize: "1.2rem",
    marginRight: "auto"
}

const title = {
    marginTop: "18%",
    fontSize: "2.8rem",
    textAlign: "center"
}

const fromTop = {
    marginTop: "19%",
    textAlign: "center"
}

class MainPage extends Component {

    render() {
        return(
            <div className="front-page-body">
                <div style={fromTop}>
                    <h1 style={title} className="light-font handwriting-font"> Hi! I'm Valeria </h1>
                    <div style={mainparagraph} className="handwriting-font green">
                        <li><a href="/art">Check out my art</a></li>
                        <li>Check out my computer science work</li>
                        <li>Contact me</li>
                    </div>  
                </div>      
            <img src={DigitalProfile} style={digitalprofile}></img>
            
            </div>
        )
    }
}

export default MainPage;