<template>
  <div class="container-xxl">
    <div class="row">
      <CarCard v-for="(car, index) in carsArray" :key="index" :car="car"/>
    </div>
  </div>
</template>

<script>
import CarCard from "./CarCard.vue";
import {isEmpty}  from "../domains/helpers.js"

export default {
  name: "Carlist",
  components: {
    CarCard,
  },

  computed: {
    carsArray () {
      return this.$store.getters['cars/getCars'];
    }
  },

  created() {
    if (isEmpty(this.carsArray)) {
      this.$store.dispatch("cars/addCars");
    }
  },
};
</script>

<style scoped></style>
