import { Table, Tag, Space } from 'antd';
import React from 'react';
import "../utils/Config";

const columns = [
  {
    title: '部门',
    dataIndex: 'depart',
    key: 'depart',
   
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '是否打卡',
    dataIndex: 'daka',
    key: 'daka',
  },
  
];


class Statis extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
    
}

componentWillMount() {
    setInterval((function() {
        let obj = JSON.parse(localStorage.getItem(global.user.name));
        var newobj = {depart:obj.depart, name: obj.name, time: obj.time, daka: obj.daka};
        var jj = [];
        jj.push(newobj);
        this.setState({
            data: jj
        })
      }).bind(this), 1000)
}

    render(){
       
        const {info} = this.props;
        return(
            <Table columns={columns} dataSource={this.state.data} />
        );
    }
}
export default Statis;