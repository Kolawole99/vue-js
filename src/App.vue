<template>
  <div id="app" class="app">
    <component :is="layout">
      <router-view :key="$route.fullPath"></router-view>
    </component>
  </div>
</template>

<script>
const defaultLayout = "Default";
import Alternative from "./layout/Alternative";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    },
  },
  components: {
    Alternative,
  },
};
</script>
