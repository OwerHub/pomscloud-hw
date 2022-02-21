<template>
  <div>
    <table>
      <tr class="thead">
        <th>Name</th>
        <th>Mail</th>
        <th>Description</th>
        <th>Type</th>
        <th>Status</th>
        <th>Signup</th>
        <th>Modify</th>
      </tr>

      <tr
        v-for="user in $store.getters.pagedUserArrayInVuex"
        v-bind:key="user.id"
        class="tbody"
      >
        <th>{{ user.name }}</th>
        <th>{{ user.email }}</th>
        <th>{{ user.descript }}</th>
        <th :class="[user.type === 'admin' ? 'admin' : 'user']">{{ user.type }}</th>
        <th :class="[user.status === 'active' ? 'active' : 'passive']">
          {{ user.status }}
        </th>
        <th>{{ user.signupTime }}</th>
        <th>
          <button v-on:click="sendToModal(user.id)">modify</button>
        </th>
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
      this.userIdForModal = id;
      this.modalOpen = true;
    },
  },
};
</script>

<style>
table {
  width: 90vw;
  margin: 1rem auto;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 5px;
}

.thead th {
  background-color: rgba(0, 255, 0, 0.4);
  height: 2rem;
  border-radius: 5px;
  padding: 5px 0;
}

.tbody th {
  height: 3rem;
  border-radius: 5px;
}

.tbody:nth-child(2n-1) {
  background-color: rgba(128, 0, 128, 0.2);
}
.tbody:nth-child(2n) {
  background-color: rgba(128, 0, 128, 0.1);
}

.active {
  color: rgb(2, 82, 2);
}
.passive {
  color: rgb(121, 0, 0);
}
.admin {
  color: rgb(9, 13, 255);
}
.user {
  color: rgb(221, 122, 9);
}

/* that it can be set separately */
.thead th:nth-child(1) {
  width: 10vw;
}
.thead th:nth-child(2) {
  width: 10vw;
}
.thead th:nth-child(3) {
  width: 10vw;
}
.thead th:nth-child(4) {
  width: 10vw;
}
.thead th:nth-child(4) {
  width: 10vw;
}
.thead th:nth-child(5) {
  width: 5vw;
}
.thead th:nth-child(6) {
  width: 10vw;
}
.thead th:nth-child(7) {
  width: 5vw;
}
</style>
