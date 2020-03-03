import React, { Component } from 'react';
import samurai from '../Images/samurai.jpg'
import gungirl from '../Images/gungirl.jpg'
import ornament from '../Images/ornament.png'
import outside from '../Images/garden.jpg'
import electronic from '../Images/electronic.jpg'
import snowpainting from '../Images/snowpainting.jpg'
import birds from '../Images/birds.jpg'
import Reveal from 'react-reveal/Reveal';


const photoStyle = {
    width: "800px"
}

class ArtPage extends Component {

    render() {
        return(
            <div className="container">
                <Reveal>
                <div className="row  justify-content-center artpage">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                                <img style={photoStyle} alt="Watercolor painting of some flower pots" src={outside}></img>
                                <p className="card-text">Jul-2019 | This was my first try after I was gifted a watercolor kit. I was more accustomed to oil painting but I enjoyed the texture of watercolors thoroughly, it opend up possiblities I wasn't used to with oil based paint. </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    </Reveal>
                    <Reveal>
                <div className="row  justify-content-center artpage">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                            <img style={photoStyle} alt="Watercolor on christmas tree ornament" src={ornament}></img>
                            <p className="card-text">Jul-2019 | Christmas was approaching and I painted a small tree ornament using oil based paint and really tiny brushes. </p>
                            </div>
                        </div>
                    </div>
                </div>
                </Reveal>
                <Reveal>
                <div className="row  justify-content-center artpage">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                            <img style={photoStyle} alt="Oil painting of a snowy mountain" src={snowpainting}></img>
                            <p className="card-text">Jul-2018 | Oil painting of a snowy mountain.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Reveal>
                <Reveal>
                <div className="row  justify-content-center artpage">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                            <img style={photoStyle} alt="Line manga style art" src={gungirl}></img>
                            <p className="card-text">Sep-2019 | Line art sniper rifle </p>
                            </div>
                        </div>
                    </div>
                </div>
                </Reveal>
                <Reveal>
                <div className="row  justify-content-center artpage">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                            <img style={photoStyle} alt="Manga style samurai art" src={samurai}></img>
                            <p className="card-text">Sep-2019 | Line art Samurai</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Reveal>
                <Reveal>
                <div className="row  justify-content-center artpage">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                            <img style={photoStyle} alt="EDM artist portraits" src={electronic}></img>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Reveal>
                <Reveal>
                <div className="row  justify-content-center artpage">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                            <img style={photoStyle} alt="Watercolor of two birds" src={birds}></img>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Reveal>
            </div>
        )}
}
export default ArtPage;