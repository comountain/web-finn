import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import moment from 'moment';
import "../utils/Config";
import '../css/main.css';
import '../css/responsive.css';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Choose = () => {

    
    const handleSubmit = e => {
        const reason = e['reason'];
        const word = e['more'];
        const time1 = e['time1'];
        const time2 = e['time2']
        let obj = {"name": global.user.name,"depart": global.user.depart,"time": time1+"-"+time2,"shiyou":reason, "beizhu": word};
                localStorage.setItem(global.user.name+"apply",JSON.stringify(obj));
    };

  return (
    <div className="col-sm-4" style={{marginLeft: 120, marginTop: 0, borderWidth: "5px",width: "600px", height: "400px"}}>  
    <b>提交缺勤是由: </b>
    <br></br>
                <Form onFinish={handleSubmit}>
                    <Form.Item
                        name="reason"
                         rules={[{ required: true, message: '请填写缺勤事由！'}]}
                    >
                        <Input  placeholder="缺勤是由" type="reason" id="getreason"/>
                    </Form.Item>
                    <br></br>
                    <b>起止时间：</b>
                    <Form.Item
                        name="time1"
                         rules={[{ required: true, message: '请填写申请时间！'}]}
                    >
                        <Input  placeholder="申请时间" type="time" id="gettime"/>
                    </Form.Item>
                    <br></br>
                    <Form.Item
                        name="time2"
                         rules={[{ required: true, message: '请填写申请时间！'}]}
                    >
                        <Input  placeholder="申请时间" type="time" id="gettime"/>
                    </Form.Item>
                    <br></br>
                    <Form.Item
                        name="more"
                         rules={[{ required: false}]}
                    >
                        <Input  placeholder="请填写备注" type="more" id="getmore"/>
                    </Form.Item>
                    <br></br>
                    
                    <br></br>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" id="set">
                            提交
                        </Button>        
                    </Form.Item>
                   
                </Form>
   
    </div>
  );
};

export default Choose;