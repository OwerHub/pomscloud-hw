import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    test: "testString",
    find: "",
    pageNumberVuex: 1,
    pageSizeVuex: 2,
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
    updateUsers(state, userObject) {
      const actualUser = state.userArray.find((user) => user.id === userObject.id);
      for (const key in actualUser) {
        actualUser[key] = userObject[key];
      }
    },

    updateFind(state, findString) {
      state.find = findString;
    },

    updatePageNumberVuex(state, number) {
      state.pageNumberVuex = number;
    },
    loadUsers(state, userArray) {
      state.userArray = userArray;
      /*  console.log("state");
      console.log(state.userArray); */
    },
  },

  getters: {
    filteredUserVuex(state) {
      const filteredUsers = state.userArray.filter((user) => {
        return user.name.match(state.find) || user.descript.match(state.find);
      });

      const paginatedArray = filteredUsers.slice(
        (state.pageNumberVuex - 1) * state.pageSizeVuex,
        state.pageNumberVuex * state.pageSizeVuex
      );

      return paginatedArray;
    },
  },
  actions: {
    loadData({ commit }) {
      axios
        .get("../datas/users.json")
        .then((response) => {
          commit("loadUsers", response.data);
        })
        .catch((err) => console.log("fucked up" + err));
    },
  },
  modules: {},
});
