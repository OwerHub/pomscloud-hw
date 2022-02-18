<template>
  <div class="modalOuter">
    <div class="modalInner">
      modalInner

      <button @click="closeModal">close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    closeModal: function () {
      this.$emit("modalClose");
    },
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
</style>
