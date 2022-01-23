<template>
  <div class="car">
    <div class="container-xxl">
      <div class="row my-4">
        <div class="col-5">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner d-flex align-items-center">
              <div class="carousel-item active">
                <img
                  src="https://car-rent.in.ua/wp-content/uploads/2021/10/dsc_7229.jpg"
                  class="d-block w-100"
                  alt="Mazda-6"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://car-rent.in.ua/wp-content/uploads/2021/10/dsc_7239.jpg"
                  class="d-block w-100"
                  alt="Mazda-6"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://car-rent.in.ua/wp-content/uploads/2021/10/dsc_7248.jpg"
                  class="d-block w-100"
                  alt="Mazda-6"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://car-rent.in.ua/wp-content/uploads/2021/10/dsc_7257.jpg"
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
            <div class="col-12">
              <span>Характеристики</span>
            </div>
            <div class="col-6">
              <div>Тип кузова</div>
              <div>Объем двигателя</div>
              <div>Тип трансмиссии</div>
            </div>
            <div class="col-6">
              <div>Тип Топлива</div>
              <div>Рассход на 100 км</div>
              <div>Год выпуска</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
