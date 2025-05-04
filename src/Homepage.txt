/* File: src/pages/HomePage.vue */
<template>
  <div class="home-page">
    <h1>AudioKitob Saytiga Xush kelibsiz!</h1>
    <p>O'qish oson, eshitish qulay.</p>
    <button @click="playAudio">▶️ Play Audio</button>
    <audio ref="audioRef" src="/sample.mp3"></audio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const audioRef = ref(null)
function playAudio() {
  audioRef.value.play()
}
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 2rem;
}
</style>
