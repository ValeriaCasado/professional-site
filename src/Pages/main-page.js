import React, { Component } from 'react';
import DigitalProfile from '../me-digital-v2.2.png'

const digitalprofile = {
    bottom: "0",
    position: "fixed",
    width: "60%",
    right:"50px"
}

const title = {
    marginTop: "30%"
}

class MainPage extends Component {

    render() {
        return(
            <div>
            <div className="container">
                <h1 style={title} className="light-font"> Welcome, Traveler! </h1>

            </div>
            <div style={{textAlign: "center"}}>
            <img src={DigitalProfile} style={digitalprofile}></img>
            </div>
            </div>
        )
    }
}

export default MainPage;