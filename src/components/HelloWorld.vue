<template>
  <div class="hello">
    <h1 @click="helloemit('111')">{{ msg }}click</h1>
    <h2>{{names}}</h2>
    <hello2 msg="222"></hello2>
    <p>{{message}}{{message2}}
{{reversedMessage}}
      
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue , Emit } from 'vue-property-decorator';
import hello2 from '@/components/hello2.vue';

@Component({
  //组件
  components:{hello2},
})
export default class HelloWorld extends Vue {
  //private 它就不能在声明它的类的外部访问
  // 
  @Prop() private msg: string|undefined;
  @Prop() private names!:string;


  @Emit()
  helloemit(n: String) {
    // this.message = this.message + 'emit'
    console.log(n)
    return n
  }

  //原来的data
  message='helloooo'
  message2='hellllll'

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


	// 生命周期
  private created ():void { }
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
