import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import http from '../.././utils/http.js';
import { Table,Modal,message } from 'antd';
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from './map'
class Plan extends Component {
    constructor(){
        super()
        this.state={
            dataSource:[],
            visible:false,
            delItem:null
        }
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    render() {
        let that = this;
        let columns=[
            {
               title:"计划ID",
               dataIndex:"key"
            },
            {
               title:"计划名称",
               dataIndex:"name"
            },
            {   
                title:"投放目的",
                dataIndex:"promotionType"
            },
            {
                title:"日预算",
                dataIndex:"dayBudget"
            },
            {
                title: "今日消耗",
                dataIndex: "clickPrice"
            },
            {
                title: "总消耗",
                dataIndex: "consumed"
            },
            {
                title: "曝光量",
                dataIndex: "exposeNum"
            },
            {
                title: "点击量",
                dataIndex: "clickNum"
            },
            {
                title: "点击率",
                dataIndex: "clickRate"
            },
            {
                title: "状态",
                dataIndex: "status"
            },
            {
                title: "",
                key: "action",
                render: (text, record) => {
                    function del(record){
                        that.setState({
                            visible:true,
                            delItem:record
                        })
                    }
                    return(
                        <span>
                            <a onClick={()=>{del(record)}} href="#">x</a>
                        </span>
                    )
                }
            }
        ]
        return <div>
            <Modal title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
            您确定要删除{this.state.delItem && this.state.delItem.name}吗？
            </Modal>
            <Table dataSource={this.props.planlist} columns={columns}></Table>
        </div>
    }
    componentDidMount() {
        this.props.getPlanList()
    }
    handleOk() {
        this.setState({
            visible:false
        })
     this.props.delPlanListItem(this.state.delItem.key)
    }
    handleCancel() {
        this.setState({
            visible: false
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Plan)