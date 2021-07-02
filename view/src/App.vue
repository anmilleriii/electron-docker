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
      @click="send('hey')"
    >
      Send message
    </button>
    <!-- <HelloWorld /> -->
  </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";

// console.log(window.ipcRenderer)
import sendAsync from "./message-control/renderer";

console.log(sendAsync);

function send(data) {
  sendAsync(data).then((result) => {
    console.log(result);
  });
}
async function addFarm({ commit }, farm) {
  // Check db.json
  // Add keys to farm (more convienent than? remove?)
  const augmentedFarm = Object.assign(farm, {
    id: uuid(),
  });
  const response = await axios
    .post(`/api/farms`, augmentedFarm)
    .catch((error) => console.log);
  // TODO: Also accept 201?
  if (response.status === 200) {
    commit("ADD_FARM", augmentedFarm);
  }
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
