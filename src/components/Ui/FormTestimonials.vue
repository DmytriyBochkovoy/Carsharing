<template>
  <div class="form-testimonials">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                <span class="px-2 fs-5">Ваше имя и фамилия</span>
                <input v-model="this.name" type="text" class="name-user" />
              </slot>
            </div>
            <div class="modal-body mt-2">
              <slot name="body">
                <span class="px-2 fs-5">Отзыв</span>
                <textarea
                  v-model="this.reviewText"
                  class="textarea-form rounded px-2"
                ></textarea>
              </slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <button
                  class="cancel-btn btn btn-light fs-7 mx-3"
                  @click="$emit('close')"
                >
                  Отменить
                </button>
                <button class="leave-btn btn fs-7 mx-3" @click="addTestimonials">
                  Оставить отзыв
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      reviewText: "",
    };
  },
  methods: {
    addTestimonials() {
      this.$store.commit("testimonials/addTestimonialsUsers", this.name, this.reviewText);
    },
  },
};
</script>

<style scoped>
.form-testimonials {
  width: 500px;
}
.modal-header {
  flex-direction: column;
  align-items: flex-start;
  border: 0;
  padding: 0;
}
.modal-body,
.modal-footer {
  text-align: start;
  padding: 0;
  border: 0;
}
.modal-footer {
  display: flex;
  justify-content: space-between;
}
.name-user,
.textarea-form {
  width: 100%;
  padding: 5px 10px;
}
.leave-btn {
  background-color: #3e77aa;
  color: rgb(255, 255, 255);
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
