import React from "react";
import '../css/main.css';
import '../css/responsive.css';

class HeadTop extends React.Component{
    render(){
        return(
            <div className="header_top" style={{backgroundColor: '#11f8fa'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="contactinfo">
                                <ul className="nav nav-pills">
                                    <li><a href="#"><i className="fa fa-envelope"></i> {this.props.mail}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadTop