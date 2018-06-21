<template>
  <div id="app">
    <canvas id="myCanvas" :width="width" :height="height" ></canvas>
  </div>
</template>

<script>
import {Main} from "./main.js";
export default {
  name: 'App',
  data(){
    return {
      width: window.innerWidth,
      height:window.innerHeight
    }
  },
  mounted(){
    new Main('myCanvas');
  },
  created(){

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
