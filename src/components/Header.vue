<template>
  <Contacts />
  <div class="bg-light">
    <div class="container-xxl">
      <div class="row">
        <div class="col-4 d-flex align-items-center">
          <a class="navbar-brand" href="#"
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
        <div class="col-4 d-flex align-items-center">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Поиск"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Поиск</button>
          </form>
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
          class="collapse navbar-collapse align-items-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
              <router-link to="/client_feedback" class="nav-link fw-bolder"
                >Отзывы</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Contacts from '@/components/Contacts.vue';


export default {
  name: 'Header',
  components: {
    Contacts,
  },
}

</script>

<style scoped>
a:active,
a:hover,
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}

.logo {
  max-width: 150px;
  max-height: 200px;
  border-radius: 20%;
}
.bg_navbar {
  background-color: #333333;
}
</style>
