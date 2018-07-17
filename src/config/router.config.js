import Home from '.././views/home/home.jsx';
import Plan from '.././views/plan/plan.jsx';
import Overview from '.././views/overview/overview.jsx';
import Unit from '.././views/unit/unit.jsx';
import NewBuild from '.././views/newbuild/newbuild.jsx';
import Login from '.././views/login/login.jsx';
import Index from '.././views/index/index.jsx';
import {Redirect} from 'react-router-dom';
let router = {
    routes: [
        // {
        //    path:'/',
        //    exact:true,
        //    component:()=><Redirect from="/" to="/index/home"/>
        // },
       {
            path:'/login',
            component:Login
        },{
            path:'/',
            component:Index,
            children:[
                 {
            path: '/home',
            component: Home
        }, {
            path: '/plan',
            component: Plan
        }, {
            path: '/',
            component: Overview,
            exact:true
        }, {
            path: '/unit',
            component: Unit
        }, {
            path: "/newBuild",
            component: NewBuild
        },
            ]
        }
    ]
}
export default router;