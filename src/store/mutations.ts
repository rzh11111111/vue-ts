//mutations.ts
import { MutationTree } from "vuex";
import State from './state';

const Mutations: MutationTree<any> = {
    //测试
    SET_TOKEN(
        State:any,
        res:any
    ):void {
        console.log(res)
        State.success=res
    },
  // 校验
  EXAMINE_INFO(
    State: any,   //对应封装里面的state
      res: any      //对应封装里面的payload
  ): void {    //void与java中类似，返回值的含义
      if (res.data.msg !== undefined) {
        State.success = res.data.msg;
      }
      State.code = res.data.code;
  },
  // 注册
  REGISTER_INFO(
    State: any,
      res: any
  ): void {
    State.success = res.data.msg;
    State.code = res.data.code;
  },
  // 登录
  LOGIN_INFO(
    State: any,
      res: any
  ): void {
    State.loginList = res.data.data;
    State.success = res.data.msg;
      if (res.data.token !== undefined) {
          localStorage.setItem("TOKEN", res.data.token);
      }
  }
};
export default Mutations

