<template>
  <div
    @click="$router.push(`/cars/${car.id}`)"
    class="col-4 d-flex justify-content-center"
  >
    <div class="row border bg_color rounded card_hover my-2 mx-2">
      <div class="col-12 py-3">
        <span class="fs-3 fw-bolder">{{ car.name }}</span>
      </div>
      <div class="col-6">
        <div class="d-flex justify-content-end">
          <img
            :src="car.image.image1"
            class="w-100 d-block car_style"
            alt="car-mazda-6"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="d-flex justify-content-start py-2">
          <img src="@/assets/refueling.png" alt="refueling" />
          <span class="px-2">{{ car.fuel }}</span>
          <!-- <input type="text" placeholder="hfvdhfjbv"> -->
        </div>
        <div class="d-flex justify-content-start py-2">
          <img src="@/assets/filling.png" alt="filling" />
          <span class="px-2">{{ car.consumption }}</span>
          <!-- <input type="text" placeholder="hfvdhfjbv"> -->
        </div>
        <div class="d-flex justify-content-start py-2">
          <img src="@/assets/engine.png" alt="engine" />
          <span class="px-2">{{ car.power }}</span>
          <!-- <input type="text" placeholder="hfvdhfjbv"> -->
        </div>
        <div class="d-flex justify-content-start py-2">
          <img src="@/assets/gear-shift.png" alt="engine" />
          <span class="px-2">{{ car.shiftBox }}</span>
          <!-- <input type="text" placeholder="hfvdhfjbv"> -->
        </div>
      </div>
      <div class="col-12">
        <div>Стоимость за сутки</div>
        <div class="fs-5">{{ car.price }}$ / сутки</div>
        <BookCarButton />
      </div>
    </div>
  </div>
</template>

<script>
import BookCarButton from "@/components/Ui/BookCarButton.vue";
export default {
  components: {
    BookCarButton,
  },
  props: {
    car: {
      type: Object,
      required: true,
    },

    id: Number,
  },
  methods: {},
};
</script>

<style scoped>
.card_hover {
  transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  -webkit-transition: all 0.5s ease-out;
}

.card_hover:hover {
  cursor: pointer;
  transform: scale(1.03);
  -moz-transform: scale(1.03);
  -o-transform: scale(1.03);
}
.car_style {
  max-width: 255px;
}
.bg_color {
  background-color: #fafafa;
}
</style>
