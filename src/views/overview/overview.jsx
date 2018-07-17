import React, {Component, Fragment} from 'react';
import moment from 'moment';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import './overview.css'
import {Tooltip} from 'antd';
import {DatePicker} from 'antd';
import {Spin} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import http from '../.././utils/http.js';
moment.locale('zh-cn');

let {RangePicker} = DatePicker;
// import { browserHistory } from 'react-router'

class Overview extends Component {
    constructor() {
        super()
        this.onChange = this
            .onChange
            .bind(this)
        this.option = {
            xAxis: {
                type: 'category',
                data: []
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [],
                    type: 'line'
                }
            ]
        };
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div className="Rightbox">
                <div className="spin"><Spin spinning={this.state.loading} delay={500}></Spin></div>
                <aside>
                    <Tooltip className="Tool">
                        <p>现金账户</p>
                        <h1>￥126,560.00</h1>
                    </Tooltip>
                    <Tooltip className="Tool">
                        <p>今日消耗</p>
                        <h1>￥5,400</h1>
                    </Tooltip>
                </aside>

                <div className="Situation">
                    <h3>整体情况</h3>
                    <div className="date">
                        <span className="datas">近7天</span>
                        <span className="datas">近30天</span>
                        <span><RangePicker onChange={this.onChange} format={'YYYY/MM/DD'}/></span>
                    </div>
                </div>

                <div className="amount">
                    <Tooltip className="Toolss">
                        <p>曝光量(次)</p>
                        <h3>278,456</h3>
                    </Tooltip>
                    <Tooltip className="Toolss">
                        <p>点击量(次)</p>
                        <h3>278,456</h3>
                    </Tooltip>
                    <Tooltip className="Toolss">
                        <p>点击量(次)</p>
                        <h3>278,456</h3>
                    </Tooltip>
                    <Tooltip className="Toolss">
                        <p>点击量(次)</p>
                        <h3>278,456</h3>
                    </Tooltip>
                </div>

                <section>
                    <div>
                        <div className="chart" ref="chart"></div>
                    </div>
                </section>

            </div>
        )
    }
    componentDidMount() {
        let echartInstance = echarts.init(this.refs.chart);
        this.echartInstance = echartInstance;
        this.setDate([
            moment()
                .subtract(7, 'days')
                .format('YYYY/MM/DD'),
            moment().format('YYYY/MM/DD')
        ])
        // window.onresize = function () {   echartInstance.resizez(); }
    }
    onChange(date, dateString) {
        this.setDate(dateString)
    }
    setDate(date) {
        let endDate = moment(new Date(date[1]))
        let startDate = moment(new Date(date[0]))
        let d = endDate.diff(startDate,'days')
        console.log(d)
        let xarr = [];
        for (let i = 0; i <= d; i++) {
            xarr.unshift(moment(date[1]).subtract(i, 'days').format('YYYY/MM/DD'))
        }
        let option = this.option;
        setTimeout(() => {
            http.post('/dsp-report/index', {
                count: d + 1
            })
                .then(res => {
                    option.xAxis.data = xarr;
                    option.series[0].data = res.data.dataY1
                    this.echartInstance.setOption(option)
                    this.setState({
                      loading:false
                    })
                })
        }, 1000)
    }
}
export default Overview