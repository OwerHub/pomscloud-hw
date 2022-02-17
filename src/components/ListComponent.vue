<template>
  <div>this is listComponent</div>
  <div>{{ $store.state.test }}</div>
  <ul>
    <li v-for="user in $store.state.testUsers" v-bind:key="user.id">
      {{ user.name }} | {{ user.email }} | {{ user.descript }} | {{ user.type }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListComponent",
};
</script>
