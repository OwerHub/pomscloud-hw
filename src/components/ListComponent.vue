<template>
  <Search />
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
        v-for="user in $store.getters.pagedUserArrayInVuex"
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
  </div>

  <Pagination v-if="this.$store.state.userArray.length > 0" />
  <Modal @modalClose="closeModal" :userId="userIdForModal" v-if="modalOpen" />
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
      onlyActive: false,
      modalOpen: false,
      userIdForModal: 0,
    };
  },

  created() {
    this.userArray = this.$store.state.userArray;
    /*  console.log(this.userArray[1].name); */
  },

  methods: {
    closeModal: function () {
      this.modalOpen = false;
    },

    sendToModal: function (id) {
      console.log("id in sendmodal", id);
      this.userIdForModal = id;
      this.modalOpen = true;
    },
    switchOnlyActive: function () {
      this.onlyActive = !this.onlyActive;
    },
  },
};
</script>

<style>
table {
  width: 90vw;
}
</style>
