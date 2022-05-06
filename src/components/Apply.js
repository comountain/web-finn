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
    title: '是由',
    dataIndex: 'shiyou',
    key: 'shiyou',
  },
  
  {
      title: '备注',
      dataIndex: 'beizhu',
      key: 'beizhu',
},
];


class Apply extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
    
}

componentWillMount() {
    setInterval((function() {
        let obj = JSON.parse(localStorage.getItem(global.user.name+"apply"));

        this.setState({
            data: [{depart:obj.depart, name: obj.name, time: obj.time, shiyou: obj.shiyou, beizhu: obj.beizhu}]
        })
      }).bind(this), 1000)
}

    render(){
       
        return(
            <Table columns={columns} dataSource={this.state.data} />
        );
    }
}
export default Apply;