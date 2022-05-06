import React from 'react';
import '../css/signin.css';
import '../components/LoginForm.js'
import {withRouter} from 'react-router-dom';
import LoginForm from '../components/LoginForm.js';

class LoginView extends React.Component{
    render(){
       return(
       <div className="pict"> 
        <div id="container" className="animated bounceInLeft">
                <span className="login">Welcom </span>
                <LoginForm />
        </div>
       </div>);
    }
}

export default withRouter(LoginView)

