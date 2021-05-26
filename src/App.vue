<template>
  <div id="app" class="app">
    <component :is="layout">
      <router-view :key="$route.fullPath"></router-view>
    </component>
  </div>
</template>

<script>
const defaultLayout = "default";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    },
  },
};
</script>
