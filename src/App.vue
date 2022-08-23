<template>
  <header class="text-center">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <hello-world msg="123" />
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </header>
  <div class="flex-center flex-col">
    <h3 class="text-32px font-bold text-red">example(unocss preset)</h3>
    <div class="flex-center w-400px h-200px bg-light">flex-center(unocss shortcuts)</div>
  </div>
  <router-view />
</template>
<script setup lang="ts"></script>
<style></style>
