<template>
  <div>
    <div class="buttonContainer">
      <div
        v-for="number in pageArray"
        :key="number"
        :class="{ actualPage: pageNumber === number }"
        @click="$emit('changePage', number)"
      >
        <div>{{ number }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["userPerPage", "pageNumber"],

  data() {
    return {
      maxPage: 0,
    };
    // actualpage:1
  },

  computed: {
    pageArray: function () {
      return Array.from({ length: this.maxPage }, (_, i) => i + 1);
    },
  },

  created() {
    const allUsersLength = this.$store.state.testUsers.length;
    this.maxPage = Math.ceil(allUsersLength / this.userPerPage);
  },
};
</script>

<style>
.buttonContainer {
  display: flex;
  justify-content: center;
}

.buttonContainer > div {
  padding: 0.3rem 0.6rem;
  border: 2px solid black;
  border-radius: 5px;
  margin: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.buttonContainer > div:hover {
  transform: scale(1.3);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}

.actualPage {
  background-color: brown;
  color: white;
}
</style>
