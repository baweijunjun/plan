import React, { Component, Fragment } from 'react';
import { Menu, Icon, Dropdown } from 'antd';
import routerConfig from '../.././config';
import Router from '../.././config/router.js';
import { connect } from 'react-redux';
import { Button, notification } from 'antd';
import { delCookie } from '../.././utils/utils.js';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import './index.css';
//import Loading from './components/loading/loading.jsx';
console.log(delCookie);
const SubMenu = Menu.SubMenu;


const openNotification2 = () => {
    notification.open({ message: '今日消耗', description: '￥5,600' });
};

const openNotification1 = () => {
    notification.open({ message: '如有问题，请邮件至', description: '@1203621448qq.com' });
};

function Signout(props) {
    return (
        <Menu onClick={(e) => { if (e.key == 2) { delCookie('token'); props.history.replace('/login') } }}>
            <Menu.Item key="2">
                退出
            </Menu.Item>
        </Menu>
    )
}

class Index extends Component {
    constructor() {
        super()
        this.state = {
            collapsed: false,
            user: ''
        }
    }
    render() {
        return (
            <BrowserRouter>
            <Switch>
            <Fragment>
                <div className="app">
                    <div style={{ width: 200 }} className="aside">
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={this.state.collapsed}
                        >
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span><NavLink to="newBuild">新建广告</NavLink></span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <span><NavLink to="/" exact>首页概览</NavLink></span>
                            </Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>广告管理</span></span>}>
                                <Menu.Item key="5"><NavLink to="plan">广告计划</NavLink></Menu.Item>
                                <Menu.Item key="6"><NavLink to="unit">广告单元</NavLink></Menu.Item>
                                <Menu.Item key="7">广告创意</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="3">
                                <Icon type="desktop" />
                                <span>数据中心</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="desktop" />
                                <span><NavLink to="home">工具箱</NavLink></span>
                            </Menu.Item>
                        </Menu>
                    </div>

                    <div className="content">
                        <header>
                            <li>
                                <Dropdown overlay={<Signout history={this.props.history}/>}>
                                    <a className="ant-dropdown-link" href="#">
                                        {this.state.user} <Icon type="down" />
                                    </a>
                                </Dropdown>
                            </li>
                            <li>
                                <Button type="primary" onClick={openNotification2}>PROBLEM</Button>
                            </li>
                            <li>
                                <Button type="primary" onClick={openNotification1}>BALANCE</Button>
                            </li>
                        </header>

                        <Router routes={this.props.routes}></Router>
                    </div>

                </div>
            </Fragment>
            </Switch>
            </BrowserRouter>


        )
    }
    componentDidMount() {
        this.setState({ user: localStorage.getItem('username') })
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        user: state
    }
}
export default connect(mapStateToProps)(Index)