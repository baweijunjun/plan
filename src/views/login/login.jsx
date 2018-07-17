import React, {Component} from 'react';
import routerConfig from '../.././config';
import Router from '../.././config/router.js';
import http from '../.././utils/http.js';
import {setCookie} from '../.././utils/utils';
import {connect} from 'react-redux';
import './Login.css';
class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            verifycode: "",
            info: "",
            code: 15312689506783
        }
        this.changeHandler = this
            .changeHandler
            .bind(this)
        this.login = this
            .login
            .bind(this)
    }
    render() {
        return (

            <div className="container">
                <h1>
                    <b>作业帮</b>
                    · 智能营销平台</h1>
                <div className="icon-title">
                    <div className="icon-title-con">
                        <i className="iconbg"></i>
                        <div className="title">
                            <p className="title-big">智能营销平台</p>
                            <p className="title-small">网络新生态 &nbsp;&nbsp;&nbsp;智能助力广告营销</p>
                        </div>
                    </div>
                </div>
                <div className="login-form">
                    <h3 className="account-landing">
                        <span>账户登录</span>
                    </h3>
                    <div className="error-title">
                        <i className="error-icon"></i>
                        <span className="error-title-text"></span>
                    </div>
                    <h4>{this.state.info}</h4>
                    <div className="form-wrap">
                        <input
                            name="username"
                            type="text"
                            className="form-input form-text"
                            placeholder="用户名"
                            value={this.state.username}
                            onChange={this.changeHandler}/>
                        <input           
                            name="password"
                            type="password"
                            className="form-input form-password"
                            placeholder="密码"
                            value={this.state.password}
                            onChange={this.changeHandler}/>
                        <div className="vcode">
                            <input
                                name="verifycode"
                                type="text"
                                className="code-text"
                                placeholder="请输入验证码"
                                value={this.state.verifycode}
                                onChange={this.changeHandler}/><img
                                onClick={() => {
                this.setState({
                    code: ++this.state.code
                })
            }}
                                src={`https://e.zuoyebang.com/dsp-admin/captcha.jpg?${this.state.code}`}/>

                        </div>
                        <button className="up-login" type="button" onClick={this.login}>
                            登 录
                        </button>
                        <p className="forget">忘记密码</p>
                    </div>
                    <div className="forget-down">
                        <p className="forget-down-title">获取新密码，请发送邮件至</p>
                        <p className="forget-down-email">consult@zuoyebang.com</p>
                        <span className="ok-email">已复制</span>
                        {/* <textarea id="copy">复制链接成功</textarea> */}
                    </div>
                    <h2>©2018&nbsp;小船出海教育科技（北京）有限公司&nbsp;作业帮</h2>
                </div>

            </div>

        )
    }
    login() {
        if (!this.state.username) {
            this.setState({info: "请填写用户名"})
            return
        }
        if (!this.state.password) {
            this.setState({info: "请填写密码"})
            return 
        }
        if (!this.state.verifycode) {
            this.setState({info: "请填写验证码"})
            return
        }

        this.setState({info: ''})

        let {username, password, verifycode} = this.state;
        http
            .post('/dsp-admin/user/login', {username, password, verifycode})
            .then(res => {
                console.log(this.props)
                if(res.success==0){
                    setCookie('token',res.token)
                    this.props.history.replace('/');
                    localStorage.setItem('username',res.user.name)
                    this.props.dispatch({
                        type:'update_user',
                        payload:res.user.name
                    })
                }else{
                   alert(res.info)
                }
            })
    }
    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}
export default connect()(Login)