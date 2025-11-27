<script setup lang="ts">
import { BButton } from "buefy";
import { ref } from "vue";

const counter = ref(0);

function increment() {
  counter.value++;
}

</script>

<template>
    <section>
      <div class="block">
        Counter : {{ counter }}
      </div>
      <b-button @click="increment">Click Me</b-button>
    </section>
</template>