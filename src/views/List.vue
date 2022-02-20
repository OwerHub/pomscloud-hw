<template>
  <div>
    <ListComponent v-if="this.$store.state.userArray.length > 0" />
  </div>
</template>

<script>
import ListComponent from "../components/ListComponent.vue";
export default {
  name: "List",
  components: { ListComponent },
};
</script>
