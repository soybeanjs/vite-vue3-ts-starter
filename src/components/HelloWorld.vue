<template>
  <div>
    <h1 class="green text-center">{{ msg }}</h1>
    <h3 class="text-center">
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> + <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
      What's next?
    </h3>
  </div>
</template>
<script setup lang="ts">
interface Props {
  /** 信息 */
  msg: string;
}

defineProps<Props>();
</script>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
