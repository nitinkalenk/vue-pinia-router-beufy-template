<script setup lang="ts">
import { BButton } from "buefy";
import { ref, watch } from "vue";

const counter = ref(0);

function increment() {
  counter.value++;
}

watch(counter, (newCount) => {
  // yes, console.log() is a side effect
  console.log(`new count is: ${newCount}`)
})

</script>

<template>
    <section>
      <div class="block">
        Counter : {{ counter }}
      </div>
      <b-button @click="increment">Click Me</b-button>
    </section>
</template>