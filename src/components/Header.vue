<template>
  <div class="bg-light">
    <div class="container-xxl">
      <div class="row">
        <div class="col-4 d-flex align-items-center">
          <a class="" href="#"
            ><img
              class="d-block w-100 logo"
              src="@/assets/logo.png"
              alt="Company`s logo"
          /></a>
        </div>
        <div class="col-4 d-flex align-items-center">
          <a class="navbar-brand fw-bolder сompany_name" href="#"
            >Каршеринг в Краматорске</a
          >
        </div>
        <div class="col-4 col-md-4 d-flex align-items-center">
          <div
            class="d-flex justify-content-center pb-3 pb-md-0 w-100 align-items-center justify-content-sm-end"
          >
            <button
              type="button"
              @click="toggleModal"
              class="btn btn-light  btn-outline-primary rounded-0 fs-7 mx-2"
            >
              Регистрация
            </button>
            <button type="button" class="btn btn-primary rounded-0 fs-7 mx-2">
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light">
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
        <div
          class="collapse navbar-collapse d-flex justify-content-end "
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link fw-bolder"
                >Главная</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/cars" class="nav-link fw-bolder"
                >Автопарк</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/client_feedback" class="nav-link fw-bolder"
                >Услуги</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/client_feedback" class="nav-link fw-bolder"
                >Обратная связь</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/client_feedback" class="nav-link fw-bolder"
                >О нас</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/feedback" class="nav-link fw-bolder"
                >Отзывы</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <MyModal v-show="isModalShow" @close="toggleModal" />
  </div>
</template>

<script>
import MyModal from "@/components/Ui/MyModal.vue";

export default {

  components: {
    MyModal,
  },

  data() {
    return {
      isModalShow: false,
    };
  },

  methods: {
    toggleModal() {
      this.isModalShow = !this.isModalShow;
    },
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
  background-color: #333333;
}
</style>
