import React from "react";
import Panel from './Panel.js'
import { Link } from "react-router-dom";
import '../css/main.css'


class HomeBar extends React.Component{
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        if(collapsed){

        }
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render(){
        return(
                <div className="col-sm-3" style={{marginLeft:-170}}>
                      <div className="left-sidebar">
                        <h2 style={{color: 'rgb(2,17,17)' ,marginLeft:-60}}>
                               AA-IOT
                        </h2>
                        <div className="panel-group category-products" id="accordian">
                            <Link to="/home"><Panel name="我的考勤"/></Link>
                            <Link to="/emploee"><Panel name="员工考勤"/></Link>
                            <Link to="/statis"><Panel name="出勤统计"/></Link>
                            <Link to="/manage"><Panel name="出勤处理"/></Link>
                        </div>
                    </div>
                </div>
        );
    }
}

export default HomeBar