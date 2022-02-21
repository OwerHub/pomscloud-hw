<template>
  <div class="modalOuter">
    <div class="modalInner">
      <h1>Modify</h1>
      <div class="inputDiv">
        <div>
          <span>name: </span>
          <input type="text" v-model="actualUser.name" />
        </div>
        <div>
          <span>mail: </span>
          <input type="text" v-model="actualUser.email" />
        </div>

        <div>
          <div></div>
          <div>description:</div>
          <textarea type="text" v-model="actualUser.descript" />
        </div>

        <div class="radioButtonCont">
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
        </div>

        <div class="radioButtonCont">
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
      </div>
      <div class=""></div>

      <div class="modalButtonCont">
        <button @click="closeModal">close</button>
        <button @click="saveClicked">save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["userId"],

  data() {
    return {
      //id: this.userId,
      actualUser: {},
    };
  },

  methods: {
    closeModal: function () {
      this.$emit("modalClose");
    },

    saveDatasMethod2: function () {
      this.$store.commit("updateUsers", this.actualUser);
    },

    saveDatasMethod1: function () {
      // copy the actualUser datas to stage.id data. The object is inmutabla, but the values can change
      for (const key in this.actualUser) {
        this.$store.state.userArray.find((user) => user.id === this.userId)[key] =
          this.actualUser[key];
      }
    },

    saveClicked: function () {
      this.saveDatasMethod2();
      this.closeModal();
    },
  },

  created() {
    // if U dont make deep copy, the input fields direct change the state object's value
    this.actualUser = {
      ...this.$store.state.userArray.find((user) => user.id === this.userId),
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
  height: 60vh;
  width: 50vw;
  padding: 1rem 0;
  background-color: white;
  border-radius: 10px;
}

.inputDiv {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.inputDiv div {
  margin: 5px 0;
}

textarea {
  margin: 0 0 1rem;
  resize: none;
  width: 100%;
  padding: 2px;
}

.radioButtonCont {
  min-width: 30%;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 1rem;
  border: 1px solid black;
  border-radius: 5px;
}

.modalButtonCont button {
  padding: 0.3rem 0.8rem;
  margin: 2rem 1rem;
  font-weight: bold;
}

.modalButtonCont button:nth-child(2) {
  color: red;
}

.modalButtonCont button:nth-child(1) {
  color: green;
}
</style>
