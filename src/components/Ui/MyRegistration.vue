<template>
  <div class="form-testimonials">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                <label for="e_mail"
                  >Телефон, имя пользователя или эл. адрес</label
                >
                <input
                  v-model="this.email"
                  id="e_mail"
                  type="text"
                  class="input-registr"
                  placeholder="E-mail"
                />
              </slot>
            </div>
            <div class="modal-body mt-2">
              <slot name="body">
                <label for="password">Пароль</label>
                <input
                  v-model="this.password"
                  id="password"
                  type="text"
                  placeholder="Пароль"
                />
              </slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <slot name="footer">
                  <button
                    class="cancel-btn btn btn-light fs-7 mx-3"
                    @click="$emit('close')"
                  >
                    Отменить
                  </button>
                  <button
                    v-show="this.registr"
                    class="btn btn-success fs-7 mx-3"
                    @click="
                      addUser();
                      $emit('close');
                    "
                  >
                    Зарегистрироватся
                  </button>
                  <button
                    v-show="this.logIn"
                    class="btn btn-success fs-7 mx-3"
                    @click="
                      login();
                      $emit('close');
                    "
                  >
                    Войти
                  </button>
                </slot>
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
  props: {
    registr: {
      type: Boolean,
      required: true,
    },
    logIn: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    addUser() {
      this.$store
        .dispatch("users/sign", {
          email: this.email,
          password: this.password,
        })
        .then((result) => {
          console.log("Login result", result);
        });
    },
    login() {
      this.$store
        .dispatch("users/login", {
          email: this.email,
          password: this.password,
        })
        .then((result) => {
          console.log("Login result", result);
        });
      this.$store.dispatch("users/setPersistenceUser", {
        email: this.email,
        password: this.password,
      });
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
  border: 0;
  padding: 0;
  align-items: stretch;
}
.modal-body {
  display: flex;
  flex-direction: column;
  padding: 0;
  border: 0;
  align-items: stretch;
}
.modal-footer {
  display: flex;
  justify-content: space-between;
  padding: 0;
  border: 0;
  align-items: stretch;
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

.input-registr {
  overflow: hidden;
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
