<script>
import BaseContainer from "../UI/BaseContainer.vue";
import uniqid from "uniqid";
import BaseButton from "../UI/BaseButton.vue";
uniqid;

export default {
  components: { BaseContainer, BaseButton },
  props: ["id", "name", "skills", "rate"],
  data() {
    return {
      uniqid: uniqid(),
    };
  },
};
</script>

<template>
  <base-container>
    <p class="font-bold text-2xl">{{ name }}</p>
    <div class="skills-container flex gap-4">
      <p class="text-xl">{{ rate }}</p>
      <span
        class="rounded-3xl border-2 px-6"
        v-for="skill in skills"
        :key="uniqid + skill"
        >{{ skill }}</span
      >
    </div>
    <div class="buttons-container">
      <base-button class="bg-primary-300">Contact</base-button>
      <base-button class="bg-primary-900 text-secondary-300"
        >View Details</base-button
      >
    </div>
  </base-container>
</template>