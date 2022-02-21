<template>
  <div>
    <div class="searchTools">
      <Search />
      <PassiveSwitch />
    </div>
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

<style>
.searchTools {
  height: 3rem;
  width: 20rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
}

.searchTools button {
  width: 5rem;
  height: 1.6rem;
}

.searchTools input {
  border-radius: 5px;
  height: 1.3rem;
}
</style>
