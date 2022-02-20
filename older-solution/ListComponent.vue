<template>
  <!-- <input type="text" v-model="search" placeholder="search blogs" /> -->
  <Search @searchFromChild="searchFromChild" />
  <PassiveSwitch :enable="onlyActive" @switchOnlyActive="switchOnlyActive" />

  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>mail</th>
        <th>desc</th>
        <th>type</th>
        <th>status</th>
        <th>signup</th>
        <th>modify</th>
      </tr>
      <tr
        v-for="user in filteredUsers"
        v-bind:key="user.id"
        v-show="
          user.status === 'active' || (!onlyActive && user.status === 'passive')
        "
      >
        <th>{{ user.name }}</th>
        <th>{{ user.email }}</th>
        <th>{{ user.descript }}</th>
        <th>{{ user.type }}</th>
        <th>{{ user.status }}</th>
        <th>{{ user.signupTime }}</th>
        <th v-on:click="sendToModal(user.id)">modify</th>
      </tr>
    </table>

    <Pagination
      :userPerPage="pageSize"
      :pageNumber="pageNumber"
      @changePage="changePage"
    />
  </div>

  <Modal @modalClose="closeModal" :userId="userIdForModal" v-if="modalOpen" />

  <!-- <button @click="modalOpen = !modalOpen">Modal Open</button> -->
</template>

<script>
import Modal from "./Modal.vue";
import Search from "./Search.vue";
import PassiveSwitch from "./PassiveSwitch.vue";
import Pagination from "./PaginationComponent.vue";

export default {
  name: "ListComponent",

  components: {
    Modal,
    Search,
    PassiveSwitch,
    Pagination,
  },

  data() {
    return {
      userArray: [],
      search: "",
      onlyActive: false,
      modalOpen: false,
      userIdForModal: 0,
      pageNumber: 1,
      pageSize: 2,
    };
  },

  created() {
    this.userArray = this.$store.state.testUsers;
  },

  computed: {
    filteredUsers: function () {
      const filteredArray = this.userArray.filter((user) => {
        return user.name.match(this.search) || user.descript.match(this.search);
      });

      // ezt szerintem ki lehetne szervezni
      const paginatedArray = filteredArray.slice(
        (this.pageNumber - 1) * this.pageSize,
        this.pageNumber * this.pageSize
      );

      return paginatedArray;
    },
  },

  methods: {
    closeModal: function () {
      this.modalOpen = false;
    },

    searchFromChild: function (searchValue) {
      this.search = searchValue;
    },

    sendToModal: function (id) {
      this.userIdForModal = id;
      this.modalOpen = true;
    },
    switchOnlyActive: function () {
      this.onlyActive = !this.onlyActive;
    },
    changePage: function (pageNumber) {
      this.pageNumber = pageNumber;
    },
  },
};
</script>

<style>
table {
  width: 90vw;
}
</style>
