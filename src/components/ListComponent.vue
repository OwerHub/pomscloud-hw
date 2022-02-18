<template>
  <div>this is listComponent</div>

  <input type="text" v-model="search" placeholder="search blogs" />
  <div>
    <button @click="onlyActive = !onlyActive">
      <span v-if="onlyActive">Show All</span>
      <span v-else>Only Active</span>
    </button>
  </div>
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
  </div>
  <Modal @modalClose="closeModal" :userId="userIdForModal" v-if="modalOpen" />
  <button @click="modalOpen = !modalOpen">Modal Open</button>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "ListComponent",
  components: {
    Modal,
  },
  data() {
    return {
      userArray: [],
      search: "",
      onlyActive: false,
      modalOpen: false,
      userIdForModal: 99,
    };
  },
  created() {
    this.userArray = this.$store.state.testUsers;
  },
  computed: {
    filteredUsers: function () {
      return this.userArray.filter((user) => {
        return user.name.match(this.search) || user.descript.match(this.search);
      });
    },
  },
  methods: {
    closeModal: function () {
      this.modalOpen = false;
    },

    sendToModal: function (id) {
      this.userIdForModal = id;
      this.modalOpen = true;
    },
  },
};
</script>

<style>
table {
  width: 90vw;
}
</style>
