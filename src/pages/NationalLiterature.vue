<template>
  <div>
    <h2>🇺🇿 Milliy Adabiyot</h2>
    <ul>
      <li v-for="book in nationalBooks" :key="book.id">
        <p>{{ book.title }}</p>
        <audio :src="book.audio" controls></audio>
      </li>
    </ul>
  </div>
</template>

<script setup>
const nationalBooks = [
  { id: 1, title: 'Tushda kechgan umrlar', audio: '/audio/Tushda_kechgan_umrlar.mp3' },
  { id: 2, title: 'Alkimyogar', audio: '/audio/Alkimyogar.mp3' },
]
</script>
