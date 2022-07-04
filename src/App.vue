<script>
import TheHeader from "./components/nav/TheHeader.vue";
export default {
  components: { TheHeader },
};
</script>


<template>
  <the-header></the-header>
  <main>
    <router-view> </router-view>
  </main>
</template>
