<template>
  <div>
    <button @click="$store.commit('changeOnlyActive')">
      <span v-if="$store.state.onlyActive">Show All</span>
      <span v-else>Only Active</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "PassiveSwitch",
};
</script>
