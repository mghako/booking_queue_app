<template>
  <AvailableDates />
</template>

<script>
import AvailableDates from "./components/AvailableDates.vue";

export default {
  name: "App",
  components: {
    AvailableDates,
  },
};
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
