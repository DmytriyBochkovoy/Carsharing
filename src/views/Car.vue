<template>
  <div v-if="car" class="car">
    <div class="container-xxl">
      <div class="row my-4">
        <div class="col-12 my-3">
          <div class="fs-3">{{ car.name }}</div>
        </div>
        <div class="col-5">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  :src="car.image.image1"
                  class="d-block w-100"
                  alt="Mazda-6"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="car.image.image2"
                  class="d-block w-100"
                  alt="Mazda-6"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-7">
          <div class="row">
            <div class="col-12 my-2">
              <span class="fs-4">Характеристики</span>
            </div>
            <div class="col-6 fs-5">
              <div>Тип кузова - {{ car.bodyType }}</div>
              <div>Объем двигателя - {{ car.capacity }}</div>
              <div>Тип трансмиссии - {{ car.shiftBox }}</div>
            </div>
            <div class="col-6 fs-5">
              <div>Тип топлива - {{ car.fuel }}</div>
              <div>Рассход - {{ car.consumption }}</div>
              <div>Год выпуска - {{ car.madeCar }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <v-date-picker v-model="range" is-range mode="date" />
        </div>
        <div class="col-6">
          <button @click="calculationDays" class="btn btn-success">
            Расчет стоимости
          </button>
          <div class="fs-4 mx-3 my-2">
            {{ carRentalCost }}
          </div>
        </div>
        <div class="col-12">
          <BookCarButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "v-calendar/dist/style.css";
import BookCarButton from "@/components/Ui/BookCarButton.vue";

export default {
  components: {
    BookCarButton,
  },

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      range: {
        start: new Date(),
        end: new Date(),
      },
      carRentalCost: null,
    };
  },

  computed: {
    car() {
      return this.$store.getters["cars/getCar"](this.id);
    },
  },

  created() {
    this.$store.dispatch("cars/getCar", this.id);
  },

  methods: {
    calculationDays() {
      const millisecondsPerDay = 24 * 3600 * 1000;
      let startDay = this.range.start;
      let endDay = this.range.end;
      let countDays = (endDay - startDay) / millisecondsPerDay + 1;
      this.carRentalCost = `Стоимость авто составит - ${countDays * this.car.price}$`;
    },
  },
};
</script>
