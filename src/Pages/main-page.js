import React, { Component } from 'react';
import DigitalProfile from '../me-digital-v2.3.png';

const digitalprofile = {
    bottom: "0",
    position: "fixed",
    width: "60%",
    right:"50px"
}

const mainparagraph = {
    maxWidth: "30rem",
    fontSize: "1.8rem",
    textAlign: "left",
    margin: "0px auto 0px auto"

}

const title = {
    marginTop: "10%",
    fontSize: "7rem",
    textAlign: "center"
}

const fromTop = {
    marginTop: "10%",
    textAlign: "center"
}

class MainPage extends Component {

    render() {
        return(
            <div className="front-page-body">
                <div style={fromTop}>
                    <h1 style={title} className="light-font handwriting-font">Page Under Construction</h1>
                    <div style={mainparagraph} className="handwriting-font green">
                    </div>  
                </div>      
            <img src={DigitalProfile} alt="Digital drawing of myself" style={digitalprofile}></img>
            </div>
        )
    }
}

export default MainPage;