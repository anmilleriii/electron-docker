<template>
  <div>
    <button
      style="
        color: white;
        font-size: 90px;
        background: red;
        width: 500px;
        height: 500px;
      "
      @click="addPost('ping')"
    >
      Send message
    </button>
  </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";
import sendAsync from "./message-control/renderer";

function send(data) {
  sendAsync(data).then((result) => {
    console.log(result);
  });
}
// Send GET request to http server on localhost:3000
async function addPost(data) {
  const response = await axios
    .get(`${"http://localhost:3000"}/posts`)
    .catch((error) => console.log);
  console.log(response);
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
