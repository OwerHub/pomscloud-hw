<template>
  <div>
    <div></div>
    <table>
      <tr>
        <th>Name</th>
        <th>Mail</th>
        <th>Description</th>
        <th>Type</th>
        <th>Status</th>
        <th>Signup</th>
        <th>Modify</th>
      </tr>
      <tr v-for="user in $store.getters.pagedUserArrayInVuex" v-bind:key="user.id">
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
      modalOpen: false,
      userIdForModal: 0,
    };
  },

  created() {},
  computed: {
    userArrayLength() {
      return this.$store.getters.pagedUserArrayInVuex.length;
    },
  },
  watch: {
    userArrayLength() {
      if (this.userArrayLength === 0) {
        this.$store.commit("resetPage");
      }
    },
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
  },
};
</script>

<style>
table {
  width: 90vw;
}
</style>
