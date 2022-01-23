<template>
    <div>
        <CarCard v-for="(car, index) in cars"
         :key="index"
         :car="car"
        />
    </div>
</template>

<script>

import CarCard from './CarCard.vue'

export default {
    name: 'Carlist',
    components: {
        CarCard,
    },
  data() {
    return {
      cars: [
        {
          name: "Mazda-6",
          fuel: "Бензин",
          consumption: "9 л на 100",
          power: "2.0 л - 198 лс",
          shiftBox: "Механика",
          price: "25 за сутки",
          image: require("@/assets/mazda-6.png"),
        },
        {
          name: "Hyundai Sonata",
          fuel: "Бензин",
          consumption: "7,7 л на 100",
          power: "2.0 л - 152 лс",
          shiftBox: "Автомат",
          price: "20 за сутки",
          image: 'https://freebiescloud.com/wp-content/uploads/2021/06/Hyundai-Sonata-N-Line-2021-1-300x169.png',
        },
        {
          name: "Audi S8",
          fuel: "Бензин",
          consumption: "17 л на 100",
          power: "4.0 л - 571 лс",
          shiftBox: "Механика",
          price: "250 за сутки",
          image: 'https://freebiescloud.com/wp-content/uploads/2022/01/Audi-S8-2022-2.png',
        },
        {
          name: "Chevrolet Sonic",
          fuel: "Бензин",
          consumption: "9 л на 100",
          power: "1.6 л - 110 лс",
          shiftBox: "Механика",
          price: "25 за сутки",
          image: 'https://freebiescloud.com/wp-content/uploads/2022/01/Chevrolet-Sonic-2020-2.png',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
