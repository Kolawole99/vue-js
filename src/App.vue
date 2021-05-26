<template>
  <div id="app" class="app">
    <component :is="layout">
      <router-view :key="$route.fullPath"></router-view>
    </component>
  </div>
</template>

<script>
const defaultLayout = "Default";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        const defaultName = "VueJS - Starter Template";
        document.title = to.meta.title || defaultName;
        return from;
      },
    },
  },
};
</script>
