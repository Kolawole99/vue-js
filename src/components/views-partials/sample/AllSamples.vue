<template>
  <div>
    <h1>All Samples</h1>
    {{ getAll }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AllSamples",
  computed: {
    ...mapState({
      getAll: (state) => state.Sample.getAll,
    }),
  },
  mounted() {
    this.$store.dispatch("Sample/getAllSamples");
  },
};
</script>
