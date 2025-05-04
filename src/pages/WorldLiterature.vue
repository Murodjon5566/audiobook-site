<template>
  <div>
    <h2>🌍 Dunyo Adabiyoti</h2>
    <ul>
      <li v-for="book in worldBooks" :key="book.id">
        <p>{{ book.title }}</p>
        <audio :src="book.audio" controls></audio>
      </li>
    </ul>
  </div>
</template>

<script setup>
const worldBooks = [
  { id: 1, title: 'Romeo and Juliet', audio: '/audio/romeo.mp3' },
  { id: 2, title: 'Hamlet', audio: '/audio/hamlet.mp3' },
]
</script>
