<template>
  <div>
      <h1 style="color:red">
          {{msg}}
          </h1>
  </div>
</template>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  //private 它就不能在声明它的类的外部访问
  // 
  @Prop() private msg: string|undefined;
}
</script>

<style>

</style>