<script setup lang="ts">
  import { BButton } from 'buefy';
  import { ref } from 'vue';
  
  const count = ref(0);
</script>

<template>
  <main>
    <h1>{{ count }}</h1>
    <b-button type="is-primary" @click="count++">Increment</b-button>
  </main>
</template>
