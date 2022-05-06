import React from 'react';
import HomeBar from '../components/HomeBar.js';
import Head from '../components/Head.js';
import {withRouter} from 'react-router-dom';
import moment from 'moment';
import { ShowDay } from '../components/show.js';
import { ShowMonth } from '../components/show.js';
import { MyCa } from '../components/cal.js';
import Choose from '../components/Choose.js';
import '../css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/responsive.css';




class HomeView extends React.Component {
    render(){
        return(
        <body>
         <Head />
         <section>
             <div className="container"> 
                <div className="row">
                    <HomeBar />
                    <h3 style={{marginLeft: 200}}><b>欢迎您！{global.user.name}</b>({global.user.depart})</h3>
                    <div class="col-sm-9 padding-right" >
                        <div class="features_items">  
                            <ShowDay  />
                            <ShowMonth />    
                           
                        </div>
                        
                    </div>        
                </div>
                <Choose />
                <MyCa />
             </div>
            
         </section>
        
        </body>
    );
  }
}

export default withRouter(HomeView)