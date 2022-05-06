import React from "react";
import {Input,Space} from 'antd';
import '../css/main.css';
import '../css/responsive.css';


const {Search} = Input
const onSearch = value => {
    
}

class SearchBar extends React.Component{
    render(){
        return(
            <Space direction="vertical" style={{marginLeft:200}}>
                <Search enterbutton placeholder="输入姓名" onSearch={onSearch}  />
            </Space>
        );
    }
}

export default SearchBar