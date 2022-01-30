<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-12 d-flex my-3">
        <div class="fs-3">Отзывы наших клиентов</div>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <div
          class="d-flex align-items-center p-3 justify-content-center border"
        >
          <span class="fs-4 me-3">Оставьте свой отзыв</span>
          <button @click="openFormAddTestimonials" class="btn btn-success me-3" type="button">
            Написать отзыв
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <!-- <ClientFeedbackList
          v-for="(review, index) in reviews"
          :key="index"
          :review="review"
        /> -->
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <FormTestimonials v-show="onTestimonials" @close="openFormAddTestimonials" @keyup.esc="openFormAddTestimonials" />
      </div>
    </div>
  </div>
</template>

<script>
import FormTestimonials from '../components/Ui/FormTestimonials.vue'

export default {
  components: {
    FormTestimonials
  },
  data() {
    return {
      onTestimonials: false,
    };
  },
  methods: {
    openFormAddTestimonials() {
      this.onTestimonials = !this.onTestimonials;
    }
  }
};
</script>

<style scoped>
input {
  width: 600px;
}
</style>
