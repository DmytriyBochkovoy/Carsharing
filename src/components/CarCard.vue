<template>
  <div class="container-xxl">
    <div class="row border border-info py-2 bg-light">
      <div class="col-12">
        <span class="py-2">Mazda-6</span>
      </div>
      <div class="col-6">
        <div class="d-flex justify-content-end">
          <img
            src="@/assets/mazda-6.png"
            class="w-100 d-block car_style"
            alt="car-mazda-6"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="d-flex justify-content-start py-2">
          <img src="@/assets/refueling.png" alt="refueling" />
          <span class="px-2">Бензин</span>
          <!-- <input type="text" placeholder="hfvdhfjbv"> -->
        </div>
        <div class="d-flex justify-content-start py-2">
          <img src="@/assets/filling.png" alt="filling" />
          <span class="px-2">9л на 100км</span>
          <!-- <input type="text" placeholder="hfvdhfjbv"> -->
        </div>
        <div class="d-flex justify-content-start py-2">
          <img src="@/assets/engine.png" alt="engine" />
          <span class="px-2">2.0 л на 198 лс</span>
          <!-- <input type="text" placeholder="hfvdhfjbv"> -->
        </div>
        <div class="d-flex justify-content-start py-2">
          <img src="@/assets/gear-shift.png" alt="engine" />
          <span class="px-2">Механика</span>
          <!-- <input type="text" placeholder="hfvdhfjbv"> -->
        </div>
      </div>
      <div class="col-12">
        <div>Стоимость за сутки</div>
        <button type="button" class="button2 b-green rot-135">
          Орендовать
        </button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
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
</style>
