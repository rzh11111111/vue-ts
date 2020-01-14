<template>
  <div class="hello">
    <h1 @click="helloemit('111')">{{ msg }}click</h1>
    <h2>{{names}}</h2>
    <hello2 msg="222"></hello2>
    <p>{{message}}{{message2}}
{{reversedMessage}}
      
    </p>
     <van-button type="primary">3232</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue , Emit } from 'vue-property-decorator';
import hello2 from '@/components/hello2.vue';
import {Button} from 'vant'
@Component({
  //组件
  components:{hello2,[Button.name]: Button,},
})
export default class HelloWorld extends Vue {
  //private 它就不能在声明它的类的外部访问
  // ?:表示可空
  @Prop() private msg?: string|undefined;
  @Prop() private names!:string;


  @Emit()
  helloemit(n: String) {
    // this.message = this.message + 'emit'
    console.log(n)
    return n
  }

  //原来的data
  message='helloooo'
  message2='hellllll12'

  // 计算属性
	private get reversedMessage (): string {
  	return this.message.split('').reverse().join('')
  }

  // method

  //需要$emit的方法才允许外部访问
  public changeMessage (): void {
    this.message = 'Good bye'
    
  }
  private getName(): string {
    let storeName = name
    return storeName
  }

  /**
 
 @param {string} message 提示信息，比如`you have a error`
 @param {number | string} code 错误码，数字和字符都行
 @param {string} type 类型，请写`demo1`或者`demo2`
 
 */

private genErrMsg (message: string, code: number | string, type?: ('demo1' | 'demo2')): string {
    return (message || `网络繁忙，请稍候再试`) + (code ? `(${code})` : ``)
}


	// 生命周期
  private created ():void { 
    // this.genErrMsg()
  }
  private mounted ():void { }
  private updated ():void { }
  private destroyed ():void { }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
