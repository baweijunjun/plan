import React, { Component } from 'react';
import loading from  './rings.svg';
import './loading.css';
class Loading extends Component{
     render(){
         return(
           <div className="mask">
               <img src={loading}/>
           </div>
         )
     }
}
export default Loading;