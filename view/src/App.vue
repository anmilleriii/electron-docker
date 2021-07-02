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
      @click="send('d')"
    >
      Send message
    </button>
    <!-- @click="send('hey')" -->
    <!-- <HelloWorld /> -->
  </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

// console.log(window.ipcRenderer)
import sendAsync from "./message-control/renderer";

// console.log(sendAsync);

function send(data) {
  sendAsync(data).then((result) => {
    console.log(result);
  });
}

// async function addPost() {
//   const response = await axios
//     .post("/api/posts", "hey")
//     .catch((error) => console.log);

//   console.log(response);
// }


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
