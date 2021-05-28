<template>
  <div>
    <h1>Delete One Sample</h1>
    {{ deleteOne }}
    <h1>Delete Many Sample</h1>
    {{ deleteMany }}
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
      deleteOne: (state) => state.Sample.deleteOne,
      deleteMany: (state) => state.Sample.deleteMany,
    }),
  },
  mounted() {
    this.$store.dispatch("Sample/resetState");

    let url;
    url = "client/";
    this.$store.dispatch("Sample/getAll", url);

    let data = {
      id: ["12", "13", "14", "15"],
      url: url,
    };
    this.$store.dispatch("Sample/deleteMany", data);

    url = `client/${this.$route.params.id}`;
    url = "client/12";
    this.$store.dispatch("Sample/deleteOne", url);
  },
};
</script>
