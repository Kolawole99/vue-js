<template>
  <div>
    <h1>One Sample</h1>
    {{ getOne }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "OneSample",
  computed: {
    ...mapState({
      getOne: (state) => state.Sample.getOne,
    }),
  },
  mounted() {
    const bookID = this.$route.params.id;
    this.$store.dispatch("Sample/getOneSample", bookID);
  },
};
</script>
