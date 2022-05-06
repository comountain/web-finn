import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import '../css/signin.css';
import * as userService from '../service/user'


class LoginForm extends React.Component{

    render(){
        const handleSubmit = e => {
            const name = e['username'];
            const word = e['password'];
            userService.login(name,word);
        };

        return(
                <Form onFinish={handleSubmit}>
                    <span className="nameicon"><i className="fa fa-user-circle"></i></span>
                    <Form.Item
                        name="username"
                         rules={[{ required: true, message: 'Please input your username!'}]}
                    >
                        <Input className="name" placeholder="Username" type="username" id="getusername"/>
                    </Form.Item>
                    <br></br>
                    <span className="passicon"><i className="fa fa-key"></i></span>
                    <Form.Item
                        name="password"
                         rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input className="password" placeholder="Password" type="password" id="getpassword"/>
                    </Form.Item>
                    <br></br>
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }} id="check">
                        <Checkbox className="check_text">Remember me</Checkbox>
                    </Form.Item>
                    <br></br>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" id="set">
                            登录
                        </Button> 
                    </Form.Item>
                   
                </Form>
        );
    }
}

export default LoginForm