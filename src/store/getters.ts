import { GetterTree } from "vuex";
import { State } from './state'
 
const getters: GetterTree<State, any> = {
    // 校验
    success(
        state: any
    ): void {
        return state.success
    },
    code(
        state: any
    ): void {
        return state.code
    },
    // 登录
    loginList(
        state: any
    ): void {
        return state.loginList
    }
};
export default getters
