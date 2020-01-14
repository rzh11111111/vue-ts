//先定义类型
export interface State {
  success: string,
  code: any,
  loginList: any[],
  registerList: any[]
}

const State: State = {
  code: null,
  success: '',
  loginList: [],
  registerList: []
};

export default State
