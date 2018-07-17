import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {getCookie} from '.././utils/utils.js';
class Router extends Component {
    render() {
        let {routes} = this.props
        return (
            <Switch>
                {/* this.props.routes.map((item, index) => {
                        return <Route key={index} path={item.path} render={(location) => {
                            if (item.children) {
                                return <item.component {...location} childroutes={item.children} />
                            } else {
                                return <item.component {...location} />
                            }
                        }}></Route>
                    })  */

                routes.map((route, index) => {
                return <Route path={route.path} exact={route.exact || false} render={(routeApi)=>{
                    if(route.path=="/login" || getCookie('token')){
                    return <route.component routes={route.children} {...routeApi}> </route.component>
                    }else{
                        return <Redirect exact to={{pathname:"/login",state:{from:route.path}}}></Redirect>
                    }
                   
                    }} key={index}></Route>
                })
}
            </Switch>
        )
    }
}
export default Router;