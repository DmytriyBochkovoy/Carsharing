<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-12 d-flex my-3">
        <div class="fs-3">Отзывы наших клиентов</div>
      </div>
      <div class="col-12">
        <input v-model="clientFeedback.feedback" type="text" />
      </div>
      <div class="col-12">
        <button class="btn btn-success mt-3" type="button">Оставить отзыв</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ClientFeedbackList v-for="(review, index) in reviews"
         :key="index"
         :review="review"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientFeedback: {
        feedback: '',
      },
    };
  },
};
</script>

<style scoped>
input {
  width: 600px;
}
</style>
