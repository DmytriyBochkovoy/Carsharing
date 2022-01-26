<template>
  <div class="contacts">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-5 col-md-3 col-xl-4">
          <div
            class="d-flex align-items-center justify-content-center justify-content-lg-start pt-3 py-sm-3 d-sm-block d-xl-flex"
          >
            <a href="tel:+7(499) 000-00-00" class="d-flex align-items-center">
              <!-- <img
                src="./img/telephone.png"
                alt="Телефон"
                class="d-block px-2 gp-5"
              /> -->
              <span class="text-white fs-7">+7(499) 000-00-00</span>
            </a>
            <a
              href="mailto:mail@gmail.com"
              class="d-flex align-items-center ps-lg-2"
            >
              <!-- <img
                src="./img/email.png"
                alt="Телефон"
                class="d-block px-2 img_width"
              /> -->
              <span class="text-white fs-7">mail@gmail.com</span>
            </a>
          </div>
        </div>
        <div
          class="col-12 col-sm-7 col-md-5 col-xl-4 d-sm-flex align-items-sm-center"
        >
          <div
            class="d-flex w-100 align-items-center justify-content-center py-3"
          >
            <!-- <div class="px-2">
              <a href="/"
                ><img src="./img/twitter.png" alt="Твиттер" class="d-block"
              /></a>
            </div>
            <div class="px-2">
              <a href="/"
                ><img src="./img/facebook.png" alt="Фейсбук" class="d-block"
              /></a>
            </div>
            <div class="px-2">
              <a href="/"
                ><img src="./img/vk.png" alt="Вконтакте" class="d-block"
              /></a>
            </div>
            <div class="px-2">
              <a href="/"
                ><img src="./img/instagram.png" alt="Инстаграм" class="d-block"
              /></a>
            </div>
            <div class="text-uppercase text-white fs-7">
              Подпишитесь на нас!
            </div> -->
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex align-items-center">
          <div
            class="d-flex justify-content-center pb-3 pb-md-0 w-100 align-items-center justify-content-sm-end"
          >
            <button
              type="button"
              @click="toggleModal"
              class="btn btn-outline-warning rounded-0 fs-7 mx-2"
            >
              Регистрация
            </button>
            <button type="button" class="btn btn-warning rounded-0 fs-7 mx-2">
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
    <MyModal v-show="isModalShow" @close="toggleModal" />
  </div>
</template>

<script>
import MyModal from "@/components/Ui/MyModal.vue";

export default {
  name: "contacts",
  components: {
    MyModal,
  },
  data() {
    return {
      isModalShow: false,
    }
  },

  methods: {
    toggleModal() {
      this.isModalShow = !this.isModalShow;
    },
  },
};
</script>

<style scoped>
.contacts {
  width: 100%;
  background-color: #333333;
}
</style>
