/* File: src/pages/WorldPage.vue */
<template>
  <div class="world-page">
    <h2>Jahon Adabiyoti</h2>
    <ul>
      <li>Hamlet – <button @click="play('/hamlet.mp3')">Play</button></li>
      <li>Pride and Prejudice – <button @click="play('/pride.mp3')">Play</button></li>
    </ul>
    <audio ref="audioRef"></audio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const audioRef = ref(null)
function play(src) {
  audioRef.value.src = src
  audioRef.value.play()
}
</script>

<style scoped>
.world-page {
  padding: 2rem;
}
</style>