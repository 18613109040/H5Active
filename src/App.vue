<template>
  <div id="app">
    <canvas id="myCanvas" :width="width" :height="height" ></canvas>
    <div class=''></div>
  </div>
</template>

<script>
import {Main} from "./main.js";
export default {
  name: 'App',
  data(){
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
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
  padding: 0px;
  margin: 0px;
}
body{
  margin: 0px;
  padding: 0px;
}
canvas{
  padding: 0px;
  margin: 0px;
}
</style>
