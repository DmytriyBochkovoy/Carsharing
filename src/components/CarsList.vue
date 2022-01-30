<template>
  <div>
    <CarCard v-for="(car, index) in carsArray" :key="index" :car="car"/>
  </div>
</template>

<script>
import CarCard from "./CarCard.vue";

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
    if (!this.carsArray?.length) {
      this.$store.dispatch("cars/addCars");
    }
  },
};
</script>

<style scoped></style>
