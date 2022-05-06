import React from "react";
import { Button } from "antd";
import '../css/main.css';
import '../css/responsive.css'
import Pic1 from '../images/wode.png'
import Pic2 from '../images/yuang.png'
import Pic3 from '../images/chuqtj.png'
import Pic4 from '../images/chuqcl.png'


function Imagee(props){
    switch(props.name){
        case '我的考勤':
            return(<img src={Pic1} width = "30px" height = "30px" alt=""></img>);
        case '员工考勤':
            return(<img src={Pic2} width = "30px" height = "30px" alt=""></img>);
        case '出勤统计':
            return(<img src={Pic3} width = "30px" height = "30px" alt=""></img>);
        case '出勤处理':
            return(<img src={Pic4} width = "30px" height = "30px" alt=""></img>);
        default:
            return null;
    }
}

class Panel extends React.Component{
    render(){
        return(
            <Button className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a>
                            <Imagee name={this.props.name} />
                               <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                <span />&emsp;{this.props.name}
                        </a>
                    </h4>
                </div>
            </Button>
        )
    }
}

export default Panel