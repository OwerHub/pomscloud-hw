import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    test: "testString",
    find: "",
    pageNumberVuex: 1,
    pageSizeVuex: 2,
    userArray: [],
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
    filteredUserArrayInVuex(state) {
      const filteredUsers = state.userArray.filter((user) => {
        return user.name.match(state.find) || user.descript.match(state.find);
      });
      return filteredUsers;
    },

    pagedUserArrayInVuex(state, getters) {
      /* const filteredUsers = state.userArray.filter((user) => {
        return user.name.match(state.find) || user.descript.match(state.find);
      }); */

      const paginatedArray = getters.filteredUserArrayInVuex.slice(
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
