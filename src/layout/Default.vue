<template>
  <div>
    <Navigation />
    <h1>Default template</h1>
    <router-view />
  </div>
</template>

<script>
import Navigation from "../components/layouts-partials/Nav";
export default {
  name: "Default",
  components: {
    Navigation,
  },
};
</script>

<style scoped></style>
