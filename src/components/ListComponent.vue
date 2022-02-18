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
    <div
      v-for="user in filteredUsers"
      v-bind:key="user.id"
      v-show="user.status === 'active' || (!onlyActive && user.status === 'passive')"
    >
      {{ user.name }} | {{ user.email }} | {{ user.descript }} | {{ user.type }}
    </div>
  </div>
  <Modal @modalClose="closeModal" v-if="modalOpen" />
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
      userIdForModal: 0,
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
      console.log("closamodal ");
      this.modalOpen = false;
    },
  },
};
</script>
