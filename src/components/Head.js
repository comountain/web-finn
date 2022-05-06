import React from "react";
import '../css/main.css';
import '../css/responsive.css';
import HeadTop from "./HeadTop";
import HeadMid from "./HeadMid";

class Head extends React.Component{
    render(){
        return(
            <header id="header" style={{marginLeft: -200}}>
                <HeadTop mail="考勤管理系统" />
                <HeadMid />
            </header>
        );
    }
}

export default Head