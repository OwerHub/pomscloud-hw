<template>
  <div>
    <input type="text " v-model="searchInComponent" placeholder="search in users" />
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchInComponent: "",
    };
  },
  watch: {
    searchInComponent() {
      this.$store.commit("updatePageNumberVuex", 1);
      this.$store.commit("updateFind", this.searchInComponent);
    },
  },
  methods: {},
};
</script>
