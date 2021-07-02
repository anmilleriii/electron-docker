<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="send('hey')">Send message</button>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import sendAsync from "./message-control/renderer";

console.log(sendAsync);

function send(data) {
  sendAsync(data).then((result) => {
    console.log(result)
  });
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
