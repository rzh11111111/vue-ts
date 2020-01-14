//actions.ts
import { ActionTree } from "vuex";
import { State } from './state'
import axios from 'axios'
 
const actions: ActionTree<State, any> = {
    // 注册校验用户名
    EXAMINE_REGISTER_DATA({ commit, state: State}, data: any[]) {
        axios({
            method: 'post',
            url: '/v1/api/verification',
            params: data
        }).then((res: any) => {
            commit('EXAMINE_INFO', res);
        }).catch((error) => {
            console.log(error)
        })
    },
};
export default actions


