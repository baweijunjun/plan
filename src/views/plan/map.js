import {GET_PLAN_LIST} from '../.././store/reducer'
import http from '../.././utils/http.js';
import {message} from 'antd'
export function mapStateToProps(state){
    return{
        planlist:state.planlist
    }
}
export function mapDispatchToProps(dispatch){
     return{
         getPlanList(){
            http.post('/dsp-advert/campaigns/list', {
            "queryType": 1,
            "queryContent": "AD-JSX-20612-00104",
            "pageNum": 1,
            "pageSize": 50,
            "statusList": [1, 2, 3],
            "startTime": 12345678,
            "endTime": 1234567876543,
        })
            .then(res => {
                 dispatch({
                 type:GET_PLAN_LIST,
                 payload:res.data.list
             })
            })
         
         },
        delPlanListItem(id){
               http.get(`/dsp-advert/campaigns/delete/${id}`).then(res => {
            if(res.status == 0){
               message.success('删除成功')
               this.getPlanList()
            }
        })
        }
     }
}