import React, { Component } from 'react';
import profile from '../profile.png'

const img = {
    width: "10rem",
    margin:"10px",
    paddingBottom: "1rem"
}


const navbarHeader = {
    fontSize: "1.5rem"
}

const signature = {
    bottom: "0",
    position: "fixed",
    left: "0"
}

class NavbarLeft extends Component {
      

    constructor(props) {
        super(props);
        this.state = {
            cc: "270px"
        }
    }

    changeWidth = (e) => {
        this.setState({
            cc: "350px"
        })
    }

    changeWidthBack = (e) => {
        this.setState({
            cc: "270px"
        })
    }


    render() {
        return ( 
            <div class="navbar-container-mobile">
            <nav style={{width:this.state.cc}} className="valeria-navbar" onMouseLeave={this.changeWidthBack}  onMouseEnter={this.changeWidth} aria-label="breadcrumb">
                <div style={{textAlign: "center", width: "100%", padding: "1rem"}}>
                <p style={{textAlign: "center"}}><strong>Valeria Casado</strong></p>
                <p style={{textAlign: "center"}}>Computer Science BSc</p>
                <p style={{textAlign: "center"}}>GU2 7UU, Surrey, UK</p></div>
            <a href='./'>
                <img src={profile} style={img} class="profile" alt="My profile"></img></a>
                <div className="list-group" id="myGroup">
                    <a className="valeria-links card-header" style={navbarHeader} data-toggle="collapse" href="#firstcollapse" role="button" aria-expanded="false" aria-controls="collapseExample">Education</a>
                    <div className="collapse size" id="firstcollapse"> 
                        <p><strong>Computer Science BSc</strong></p>
                        <p>University of Surrey</p>
                        <p>2017 - present</p>
                        <br></br>
                        <p><strong>International Baccaleureate</strong></p>
                        <p>Heidelberg Schule</p>
                        <p>2015 - 2017</p>
                    </div>
                    <a className="valeria-links card-header" style={navbarHeader} data-toggle="collapse" href="#secondcollapse" role="button" aria-expanded="false" aria-controls="collapseExample">Experience</a>
                    <div className="collapse" id="secondcollapse"> 
                        <p><strong>Web Developer</strong></p>
                        <p>Dolphin Networks</p>
                        <p>Sep 2019 - present</p>
                        <br></br>
                        <p><strong>Lead Teacher</strong></p>
                        <p>Code Camp</p>
                        <p>Feb 2019 - May 2019</p>
                        <br></br>
                        <p><strong>Computer Science Lab Helper</strong></p>
                        <p>University of Surrey</p>
                        <p>Oct 2018 - Dec 2018</p>
                    </div>
                    <a className="valeria-links card-header" style={navbarHeader} data-toggle="collapse" href="#thirdcollapse" role="button" aria-expanded="false" aria-controls="collapseExample">Skills</a>
                    <div className="collapse size" id="thirdcollapse"> 
                        <p><strong>General</strong></p>
                        <p>- Software and Web Dev</p>
                        <p>- ASP.NET, MERN stack, Ruby on Rails</p>
                        <p>- Full Development Lifecycle</p>
                        <p>- MySQL and NoSQL</p>
                        <p>- Artificial Intelligence</p>
                        <p>- SEO optimisation</p>
                        <br></br>
                        <p><strong>Programming Languages</strong></p>
                        <p>(In order of expertise)</p>
                        <p>- C#, Javascript</p>
                        <p>- CSS, SCSS, html</p>
                        <p>- Python</p>
                        <p>- C++</p>
                        <p>- php, xml</p>
                    </div>
                </div>
            <p style={signature} class="copyright"></p>
          </nav>  
          </div> 
          );
        }
    }
export default NavbarLeft;