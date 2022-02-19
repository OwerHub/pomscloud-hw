<template>
  <div class="modalOuter">
    <div class="modalInner">
      modalInner

      <button @click="closeModal">close</button>
      <div class="inputDiv">
        <input type="text" v-model="actualUser.name" />
        <input type="text" v-model="actualUser.email" />
        <textarea type="text" v-model="actualUser.descript" />

        <div v-for="inputType in ['user', 'admin']" :key="inputType">
          <input
            type="radio"
            name="inputType"
            :id="inputType"
            :value="inputType"
            v-model="actualUser.type"
          />
          @{{ inputType }}
        </div>

        <div v-for="inputStatus in ['passive', 'active']" :key="inputStatus">
          <input
            type="radio"
            name="inputStatus"
            :id="inputStatus"
            :value="inputStatus"
            v-model="actualUser.status"
          />
          @{{ inputStatus }}
        </div>
      </div>
      <button @click="saveClicked">save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["userId"],
  data() {
    return {
      id: this.userId,
      actualUser: {},
    };
  },
  methods: {
    closeModal: function () {
      this.$emit("modalClose");
    },

    saveDatasMethod1: function () {
      // copy the actualUser datas to stage.id data. The object is inmutabla, but the values can change
      for (const key in this.actualUser) {
        this.$store.state.testUsers.find((user) => user.id === this.userId)[key] =
          this.actualUser[key];
      }
    },

    saveClicked: function () {
      this.saveDatasMethod1();
      this.closeModal();
    },
  },
  created() {
    // if U dont make deep copy, the input fields direct change the state object's value
    this.actualUser = {
      ...this.$store.state.testUsers.find((user) => user.id === this.userId),
    };
  },
};
</script>

<style>
.modalOuter {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modalInner {
  height: 70vh;
  width: 50vw;
  background-color: white;
}

.inputDiv {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

input {
  width: 50%;
}
</style>
