import React from "react";
import { Link } from "react-router-dom";
import '../css/main.css';
import '../css/responsive.css';
import Pic from '../images/home/logo.png'

class HeadMid extends React.Component{
    render(){
    return(
    <div className="header-middle">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="logo pull-left">
                        <Link to="/home"><img src={Pic} width = "50px" height = "50px" alt=""></img></Link>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="shop-menu pull-right">
                        <ul className="nav navbar-nav">
                            <li><Link to="/"><i className="fa fa-lock"></i> Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
    }
}

export default HeadMid