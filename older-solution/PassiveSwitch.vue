<template>
  <div>
    <button @click="$emit('switchOnlyActive')">
      <span v-if="enable">Show All</span>
      <span v-else>Only Active</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "PassiveSwitch",
  props: ["enable"],
};
</script>
