<template>
  <button type="button" class="button2 b-green rot-135 my-2">
    Забронировать
  </button>
</template>

<style scoped>
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
