import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    // test: "testString",
    find: "",
    onlyActive: false,
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
    changeOnlyActive(state) {
      state.onlyActive = !state.onlyActive;
    },

    updateFind(state, findString) {
      state.find = findString;
    },

    updatePageNumberVuex(state, number) {
      state.pageNumberVuex = number;
    },
    loadUsers(state, userArray) {
      state.userArray = userArray;
    },
    resetPage(state) {
      state.pageNumberVuex = 1;
    },
  },

  getters: {
    filteredUserArrayInVuex(state) {
      let searchedUsers = state.userArray.filter((user) => {
        return (
          (user.name.match(state.find) || user.descript.match(state.find)) &&
          ((state.onlyActive && user.status === "active") || !state.onlyActive)
        );
      });
      return searchedUsers;
    },

    pagedUserArrayInVuex(state, getters) {
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
        .catch((err) => console.log(err));
    },
  },
  modules: {},
});
