import React, { Component } from 'react';
import samurai from '../Images/samurai.jpg'
import gungirl from '../Images/gungirl.jpg'
import ornament from '../Images/ornament.png'
import outside from '../Images/outside.png'
import electronic from '../Images/electronic.jpg'
import snowpainting from '../Images/snowpainting.jpg'
import birds from '../Images/birds.jpg'

const photoStyle = {
    width: "500px"
}

class ArtPage extends Component {

    render() {
        return(
            <div className="container">
                <div className="row  justify-content-center artpage">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                                <img style={photoStyle} src={outside}></img>
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="row  justify-content-center artpage">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                            <img style={photoStyle} src={ornament}></img>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  justify-content-center artpage">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                            <img style={photoStyle} src={snowpainting}></img>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  justify-content-center artpage">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                            <img style={photoStyle} src={gungirl}></img>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  justify-content-center artpage">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                            <img style={photoStyle} src={samurai}></img>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  justify-content-center artpage">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                            <img style={photoStyle} src={electronic}></img>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  justify-content-center artpage">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                            <img style={photoStyle} src={birds}></img>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
}
export default ArtPage;