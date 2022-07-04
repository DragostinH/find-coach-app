<script>
import BaseContainer from "../UI/BaseContainer.vue";
import CoachCard from "./CoachCard.vue";
import CoachFilterForm from "./CoachFilterForm.vue";
export default {
  components: { BaseContainer, CoachCard, CoachFilterForm },
  computed: {
    coaches() {
      return this.$store.state.coaches;
    },
  },
};
</script>

<template>
  <base-container class="p-10">
    <coach-filter-form></coach-filter-form>
  </base-container>
  <base-container>
    <CoachCard
      v-for="(coach, index) in coaches"
      :key="index"
      :id="coach.id"
      :name="coach.name"
      :skills="coach.skills"
      :rate="coach.rate"
    />
  </base-container>
</template>