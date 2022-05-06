import React from "react";
import {withRouter} from 'react-router-dom';
import HomeBar from '../components/HomeBar.js';
import SearchBar from "../components/SearchBar.js";
import Head from '../components/Head.js';
import Statis from "../components/Statis.js";
import "../utils/Config";
import '../css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/responsive.css';

class StatisView extends React.Component{
    render(){
        return(
            <body>
         <Head />
        
         <section>
             <div className="container"> 
                <div className="row">
                    <HomeBar />
                     <SearchBar />
                    <div class="col-sm-9 padding-right" >
                        <div class="features_items">  
                          <Statis />
                           
                        </div>
                        
                    </div>        
                </div>
                
             </div>
            
         </section>
        </body>
        );
    }
}

export default withRouter(StatisView);

