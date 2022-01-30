<template>
  <div class="car">
    <div class="container-xxl">
      <div class="row my-4">
        <div class="col-12 my-3">
          <div class="fs-3"> {{car.name}} </div>
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
              <div>Тип кузова - {{car.bodyType}} </div>
              <div>Объем двигателя - {{car.capacity}} </div>
              <div>Тип трансмиссии - {{car.shiftBox}} </div>
            </div>
            <div class="col-6 fs-5">
              <div>Тип топлива - {{car.fuel}} </div>
              <div>Рассход - {{car.consumption}} </div>
              <div>Год выпуска - {{car.madeCar}} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  props: {
    id: {
      type: String,
      required: true,
    }
  },



  computed: {
    car () {
      return this.$store.getters['cars/getCar'](this.id);
    },
  },
  created() {
    this.$store.dispatch('cars/getCarById', this.id)
  }
}
</script>

