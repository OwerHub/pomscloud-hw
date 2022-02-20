<template>
  <div>
    <PassiveSwitch />
    <Search />
    <ListComponent v-if="this.$store.state.userArray.length > 0" />
    <Pagination v-if="this.$store.state.userArray.length > 0" />
  </div>
</template>

<script>
import ListComponent from "../components/ListComponent.vue";
import PassiveSwitch from "../components/PassiveSwitch.vue";
import Search from "../components/Search.vue";
import Pagination from "../components/PaginationComponent.vue";
export default {
  name: "List",
  components: { ListComponent, PassiveSwitch, Search, Pagination },
};
</script>
