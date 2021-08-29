<template>
  <div class="modal" :class="{ close: !show }">
    <div class="modal-container">
      <header>
        <img
          src="../assets/images/icons/icon_close.svg"
          alt=""
          @click="closeModal"
        />
      </header>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data: () => ({ show: true }),

  methods: {
    closeModal() {
      this.show = !this.open;
    },
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.modal {
  background-color: rgba(0 0 0 / 34%);
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 11;
  transition: 0.6s;
}

.modal-container header img {
  width: 1.95rem;
  cursor: pointer;
}

.modal-container header {
  display: flex;
  height: 4.8rem;
  background-color: var(--white);
  width: 100%;
  flex-direction: row;
  padding: 1rem;
  text-align: right;
  justify-content: flex-end;
}

.close {
  top: -100%;
  transition: 0.6s;
}
</style>
