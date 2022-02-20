<template>
  <div>
    <div class="buttonContainer">
      <div
        v-for="number in pageArray"
        :key="number"
        :class="{ actualPage: $store.state.pageNumberVuex === number }"
        @click="$store.commit('updatePageNumberVuex', number)"
      >
        <div>{{ number }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",

  data() {
    return {
      maxPage: 0,
    };
  },

  computed: {
    pageArray: function () {
      return Array.from({ length: this.maxPage2 }, (_, i) => i + 1);
    },
    maxPage2: function () {
      const allUsersLength = this.$store.getters.filteredUserArrayInVuex.length;
      const userPerPageVuex = this.$store.state.pageSizeVuex;
      return Math.ceil(allUsersLength / userPerPageVuex);
    },
  },

  watch: {
    pageNumberFromVuex() {
      console.log(this.pageNumberFromVuex);
    },
  },

  created() {
    const allUsersLength = this.$store.state.userArray.length;
    const userPerPageVuex = this.$store.state.pageSizeVuex;
    this.maxPage = Math.ceil(allUsersLength / userPerPageVuex);
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
