import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    test: "testString",
    userArray: [],
    testUsers: [
      {
        id: 1,
        name: "Zsíros B. Ödön1",
        email: "sert.es@zsir.roff",
        descript: "jófej felhasználó , szinte kenyérre lehet kenni",
        type: "user",
        status: "dead",
        signupTime: "2021-11-11",
      },
      {
        id: 2,
        name: "Zsíros B. Ödön2",
        email: "sert.es@zsir.roff",
        descript: "jófej felhasználó , szinte kenyérre lehet kenni",
        type: "user",
        status: "dead",
        signupTime: "2021-11-11",
      },
    ],
  },
  mutations: {
    loadUsers: (state, userArray) => {
      state.userArray = userArray;
    },
  },
  actions: {
    loadData({ commit }) {
      axios
        .get("../datas/users.json")
        .then((response) => {
          console.log(response.data, this);
          commit("loadUsers", response.data);
        })
        .catch((err) => console.log("fucked up" + err));
    },
  },
  modules: {},
});
