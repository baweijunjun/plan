import React, {Component} from 'react';
import {Tooltip} from 'antd';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import './home.css';
class Home extends Component {
    render() {
        return (
            <div className="boxs">
                <h1>工具箱</h1>

                <Tooltip title="prompt text" className="Tool" className="Tools">
                    <h3>账号管理</h3>
                    <p>
                        在中台产品的研发过程中，会出现不同的设计规范和实现方式,但其中往往存在很多 类似的页面和组件，这些类似的组件会被抽离成一套标准规范.
                    </p>
                </Tooltip>

                <Tooltip title="prompt text" className="Tool" className="Tools">
                    <h3>客户管理</h3>
                    <p>
                        在中台产品的研发过程中，会出现不同的设计规范和实现方式,但其中往往存在很多 类似的页面和组件，这些类似的组件会被抽离成一套标准规范.
                    </p>
                </Tooltip>
            </div>
        )
    }
}
export default Home;