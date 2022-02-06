<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-4 d-flex align-items-center">
        <a class="" href="#"
          ><img
            class="d-block w-100 p-3 logo"
            src="@/assets/logo.png"
            alt="Company`s logo"
        /></a>
      </div>
      <div class="col-4 d-flex align-items-center">
        <a class="navbar-brand fw-bolder сompany_name" href="#"
          >Прокат авто в Краматорске</a
        >
      </div>
      <div class="col-4 col-md-4 d-flex align-items-center justisy-content-end">
        <div
          v-if="!$store.getters['users/isAuth']"
          class="d-flex justify-content-center pb-3 pb-md-0 w-100 align-items-center justify-content-sm-end"
        >
          <button
            type="button"
            @click="
              toggleModal();
              swechFlagBtnReg();
            "
            class="btn btn-light btn-outline-primary fs-7 mx-2"
          >
            Регистрация
          </button>
          <button
            type="button"
            @click="
              toggleModal();
              swechFlagBtnLogin();
            "
            class="btn btn-primary fs-7 mx-2"
          >
            Войти
          </button>
        </div>
        <div v-else>
          {{ $store.getters["users/email"] }}
          <button
            @click="$store.dispatch('users/logout')"
            class="btn btn btn-outline-danger fs-7 mx-2"
          >
            Выйти
          </button>
        </div>
      </div>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg navbar-light bg_navbar">
    <div class="container-xxl">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item nav_menu-hover">
            <router-link to="/" class="nav-link fw-bolder text-light"
              >Главная</router-link
            >
          </li>
          <li class="nav-item nav_menu-hover">
            <router-link to="/cars" class="nav-link fw-bolder text-light"
              >Автопарк</router-link
            >
          </li>
          <li class="nav-item nav_menu-hover">
            <router-link to="/feedback" class="nav-link fw-bolder text-light"
              >Отзывы</router-link
            >
          </li>
          <li class="nav-item nav_menu-hover">
            <router-link to="/ourServices" class="nav-link fw-bolder text-light"
              >Услуги</router-link
            >
          </li>
          <li class="nav-item nav_menu-hover">
            <router-link
              to="/client_feedback"
              class="nav-link fw-bolder text-light"
              >Обратная связь</router-link
            >
          </li>
          <li class="nav-item nav_menu-hover">
            <router-link
              to="/client_feedback"
              class="nav-link fw-bolder text-light"
              >О нас</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <MyRegistration
    v-show="isModalShow"
    @close="toggleModal"
    :registr="this.registr"
    :logIn="this.logIn"
  />
</template>

<script>
import MyRegistration from "@/components/Ui/MyRegistration.vue";

export default {
  components: {
    MyRegistration,
  },

  data() {
    return {
      isModalShow: false,
      registr: false,
      logIn: true,
      authUser: false,
    };
  },

  methods: {
    toggleModal() {
      this.isModalShow = !this.isModalShow;
    },
    swechFlagBtnReg() {
      this.registr = true;
      this.logIn = false;
    },
    swechFlagBtnLogin() {
      this.registr = false;
      this.logIn = true;
    },
    // authUserCheck() {
    //   const uid = this.$store.getters['users/getUsers'];
    // },
  },
};
</script>

<style scoped>
a:active,
a:hover,
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}

.logo {
  max-width: 135px;
  max-height: 200px;
  border-radius: 20%;
}
.bg_navbar {
  background-color: #0051cabb;
}
</style>
