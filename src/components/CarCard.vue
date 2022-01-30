<template>
  <div @click="$router.push(`/cars/${car.id}`)"  class="car_card">
    <div class="container-xxl">
      <!-- <router-link to="/cars/1" class="nav-link fw-bolder">Автопарк</router-link> -->
      <div class="row mt-4">
        <div class="col-12 d-flex justify-content-center">
          <div class="row w-50 border bg_color rounded card_hover">
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
              <button type="button" class="button2 b-green rot-135 my-2">
                Забронировать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    car: {
      type: Object,
      required: true,
    },

    id: Number,
  },
  methods: {
    // renderCarDescription() {
    //   this.$route.required('')
    // }
  },
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
.b-green,
.b-green:before {
  background: #499bea;
  background: -moz-linear-gradient(45deg, #499bea 0, #1abc9c 100%);
  background: -webkit-gradient(
    left bottom,
    right top,
    color-stop(0, #499bea),
    color-stop(100%, #1abc9c)
  );
  background: -webkit-linear-gradient(45deg, #499bea 0, #1abc9c 100%);
  background: -o-linear-gradient(45deg, #499bea 0, #1abc9c 100%);
  background: -ms-linear-gradient(45deg, #499bea 0, #1abc9c 100%);
  background: linear-gradient(45deg, #499bea 0, #1abc9c 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#499bea',endColorstr='#1abc9c',GradientType=1);
}
.button2 {
  display: inline-block;
  padding: 0.5em;
  border-radius: 4px;
  transition: all 0.5s;
  filter: hue-rotate(0);
  color: #fff;
  text-decoration: none;
  border: none;
}
.rot-135:hover {
  filter: hue-rotate(135deg);
}
.bg_color {
  background-color: #fafafa;
}
</style>
