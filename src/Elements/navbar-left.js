import React, { Component } from 'react';
import profile from '../profile.png'

const img = {
    width: "100px",
    margin:"10px"
}

class NavbarLeft extends Component {
      

    constructor(props) {
        super(props);
        this.state = {
            cc: "10rem"
        }
    }

    changeWidth = (e) => {
        this.setState({
            cc: "15rem"
        })
    }

    changeWidthBack = (e) => {
        this.setState({
            cc: "10rem"
        })
    }


    render() {
        return ( 
            <nav style={{width:this.state.cc}} className="valeria-navbar" onMouseLeave={this.changeWidthBack}  onMouseEnter={this.changeWidth} aria-label="breadcrumb">
            <img src={profile} style={img}></img>
                <div className="list-group ">
                    <a className="valeria-links card-header" data-toggle="collapse" href="#firstcollapse" role="button" aria-expanded="false" aria-controls="collapseExample">Education</a>
                    <div className="collapse size" id="firstcollapse"> 
                        A couple of links
                    </div>
                    <a className="valeria-links card-header" data-toggle="collapse" href="#secondcollapse" role="button" aria-expanded="false" aria-controls="collapseExample">Experience</a>
                    <div className="collapse" id="secondcollapse"> 
                        <a className="valeria-links size" href="mailto:valeria.casado.business@gmail.com">A couple of social media</a>
                    </div>
                </div>
          </nav>   
          );
        }
    }
export default NavbarLeft;