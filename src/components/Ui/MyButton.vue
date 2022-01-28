<template>
  <div>
    <button type="button" class="my-button">
      <img src="@/assets/right-arrow.png" alt="Кнопка диалога">
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.my-button {
  position: absolute;
  top: 30%;
  left: 0;
  border: none;
  height: 50px;
  background-color: rgb(231, 231, 231);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
