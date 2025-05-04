/* File: src/pages/NationalPage.vue */
<template>
  <div class="national-page">
    <h2>Milliy Adabiyot</h2>
    <ul>
      <li>Alpomish - <button @click="play('/alpomish.mp3')">Play</button></li>
      <li>O‘tkan kunlar - <button @click="play('/otkan.mp3')">Play</button></li>
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
.national-page {
  padding: 2rem;
}
</style>
