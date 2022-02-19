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
      this.$emit("searchFromChild", this.searchInComponent);
    },
  },
  methods: {},
};
</script>
