<template>
  <div>
    <h1>Edit One Sample</h1>
    {{ putOne }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "OneSample",
  computed: {
    ...mapState({
      putOne: (state) => state.Sample.putOne,
    }),
  },
  mounted() {
    let data = {
      url: `client/${this.$route.params.id}`,
      type: "company",
      website: "xyz.com",
    };
    this.$store.dispatch("Sample/putOne", data);
  },
};
</script>
