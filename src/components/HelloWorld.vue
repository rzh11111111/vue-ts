<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{names}}</h2>
    <hello2 msg="222"></hello2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import hello2 from '@/components/hello2.vue';

@Component({
  components:{hello2},
})
export default class HelloWorld extends Vue {
  //private 它就不能在声明它的类的外部访问
  // 
  @Prop() private msg: string|undefined;
  @Prop() private names!:string;
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
