import React, { Component } from 'react';
import samurai from '../Images/samurai.jpg'
import gungirl from '../Images/gungirl.jpg'
import ornament from '../Images/ornament.png'
import outside from '../Images/garden.jpg'
import electronic from '../Images/electronic.jpg'
import snowpainting from '../Images/snowpainting.jpg'
import birds from '../Images/birds.jpg'
import clouds from '../Images/clouds.jpg'
import buddha from '../Images/buddha.jpg'
import naruto from '../Images/naruto.jpg'
import lapush from '../Images/lapush.jpg'
import warhammer from '../Images/40kwarhammer.jpg'

import Reveal from 'react-reveal/Reveal';


const photoStyle = {
    width: "15rem",
    height: "15rem"
}

const gallerycenter = {
    textAlign: "center"
}

const gallery = {
    width: "50rem",
    marginRight: "auto",
    marginLeft: "auto"
}

const title = {
    fontSize: "7rem",
    textAlign: "center"
}


class ArtPaget extends Component {

    state = {
        isActive: false
    }

    render() {
        
        return(
            <div>
            
            <div style={gallerycenter}>
            <h1 style={title} className="light-font handwriting-font">Gallery</h1>
                <div style={gallery} className="container">
                    <div className="row  justify-content-center">
                        <div className="col-6 col-md-4">
                            <img style={photoStyle} onClick={ () => this.setState({isActive: true})} alt="Watercolor painting of some flower pots" src={outside}></img>
                        </div> 
                        <div className="col-6 col-md-4">
                            <img style={photoStyle} alt="Watercolor on christmas tree ornament" src={ornament}></img>
                        </div>
                        <div className="col-6 col-md-4">
                            <img style={photoStyle} alt="Oil painting of a snowy mountain" src={snowpainting}></img>
                        </div>
                    </div>
                    <div className="row  justify-content-center">
                        <div className="col-6 col-md-4">
                            <img style={photoStyle}  alt="Painting of LaPush beach in the US" src={lapush}></img>
                        </div>
                        <div className="col-6 col-md-4">
                            <img style={photoStyle} alt="Manga style samurai art" src={samurai}></img>
                        </div>
                        <div className="col-6 col-md-4">
                            <img style={photoStyle}  alt="EDM artist portraits" src={electronic}></img>
                        </div>
                    </div>
                    <div className="row  justify-content-center">
                        <div className="col-6 col-md-4">
                            <img style={photoStyle}  alt="Watercolor of two birds" src={birds}></img>
                        </div>
                        <div className="col-6 col-md-4">
                            <img style={photoStyle} alt="Manga style samurai art" src={clouds}></img>
                        </div>
                        <div className="col-6 col-md-4">
                            <img style={photoStyle}  alt="EDM artist portraits" src={buddha}></img>
                        </div>
                    </div>
                    <div className="row  justify-content-center">
                        <div className="col-6 col-md-4">
                            <img style={photoStyle}  alt="Line manga style art" src={naruto}></img>
                        </div>
                        <div className="col-6 col-md-4">
                            <img style={photoStyle} alt="Manga style samurai art" src={warhammer}></img>
                        </div>
                        <div className="col-6 col-md-4">
                            <img style={photoStyle}  alt="EDM artist portraits" src={gungirl}></img>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )}
}
export default ArtPaget;