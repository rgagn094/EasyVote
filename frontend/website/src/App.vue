<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*padding: 10px 30px;*/


}
a, a:link, a:visited{
 text-decoration: none;
  color: #777;
}
  button, .button {
    padding: 5px 30px;
    text-align: center;
    border-radius: 20px;
    border: 1px solid cornflowerblue;
    color: cornflowerblue !important;
    margin: 10px;
    background: white;
    font-size: 18px;
    display: inline-block;

  }
</style>
