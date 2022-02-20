<template>
  <div>
    <PassiveSwitch />
    <Search />
    <ListComponent v-if="this.$store.state.userArray.length > 0" />
  </div>
</template>

<script>
import ListComponent from "../components/ListComponent.vue";
import PassiveSwitch from "../components/PassiveSwitch.vue";
import Search from "../components/Search.vue";
export default {
  name: "List",
  components: { ListComponent, PassiveSwitch, Search },
};
</script>
