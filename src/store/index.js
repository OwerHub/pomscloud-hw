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
        descript: "4jófej felhasználó , szinte kenyérre lehet kenni",
        type: "user",
        status: "active",
        signupTime: "2021-11-11",
      },
      {
        id: 2,
        name: "Zsíros B. Ödön2",
        email: "sert.es@zsir.roff",
        descript: "3jófej felhasználó , szinte kenyérre lehet kenni",
        type: "user",
        status: "active",
        signupTime: "2021-11-11",
      },
      {
        id: 3,
        name: "Zsíros B. Ödön5",
        email: "sert.es@zsir.roff",
        descript: "7jófej felhasználó , szinte kenyérre lehet kenni",
        type: "admin",
        status: "passive",
        signupTime: "2021-11-11",
      },
      {
        id: 4,
        name: "Zsíros B. Ödön6",
        email: "sert.es@zsir.roff",
        descript: "8jófej felhasználó , szinte kenyérre lehet kenni",
        type: "user",
        status: "passive",
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
