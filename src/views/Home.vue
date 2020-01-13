<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld 
    msg="Welcome to Your Vue.js App" 
    names="111"
    @helloemit="hellooo"
    />
    <button @click="toabout" class="homebutton"></button>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue , Emit } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'
@Component({
  //组件
  components:{HelloWorld},
})


export default class Home extends Vue  {
  public hellooo (n:any): void {
   console.log(n)
    
  }
  public toabout ():void {
    this.$router.push('/about')
  }
  beforeRouteEnter(to: any, from: any, next: () => void): void {
    console.log('beforeRouteEnter'); 
    next();
  }
   beforeRouteLeave(to: any, from: any, next: () => void): void {
    console.log('beforeRouteLeave'); 
    next();
  }

}
</script>
<style scoped>
.homebutton{
  width: 30px;
  height: 30px;
}
</style>
