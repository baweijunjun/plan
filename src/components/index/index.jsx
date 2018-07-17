import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
class Index extends Component{
     render(){
        //  let {routes} = this.props
         return(
             <div>
                  <div>
             {
                 this.props.childroutes.map((item,index)=>{
                     return <Route path={route.path} exact={route.ex} render={(location)=>{
                         if(item.children){
                           return <item.component {...location} childroutes={item.children} />
                          }else{
                             return <item.component {...location} />
                         }
                   
                     }}></Route>
                 })
             }
           </div>
             </div>
         )
     }
}
export default Index;