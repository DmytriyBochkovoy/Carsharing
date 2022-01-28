<template>
  <div class="wrraper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="fs-3">Связь</div>
        </div>
      </div>
      <div class="row py-1">
        <div class="col-12">
          <div class="pe-5 d-flex justify-content-end align-items-center">
            <span class="px-2">Имя</span>
            <my-input class="px-2 my-2 my-input-form rounded" type="text" />
          </div>
          <div class="pe-5 d-flex justify-content-end align-items-center">
            <span class="px-2">Фамилия</span>
            <my-input class="px-2 my-2 my-input-form rounded" type="text" />
          </div>
          <div class="pe-5 d-flex justify-content-end align-items-center">
            <span class="px-2">E-mail</span>
            <my-input class="px-2 my-2 my-input-form rounded" type="text" />
          </div>
          <div class="pe-5 d-flex justify-content-end align-items-start">
            <span class="px-2">Сообщение</span>
            <textarea class="textarea-form rounded"></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <my-input class="px-2 my-2" type="button" value="Отмена" />
        </div>
        <div class="col-6">
          <my-input class="px-2 my-2" type="button" value="Отправить" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyInput from "../Ui/MyInput.vue";

export default {
  components: {
    MyInput,
  },
};
</script>

<style scoped>
.wrraper {
  max-width: 500px;
  z-index: 5;
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  border-radius: 5px;
  top: 40%;
  left: 0;
}
.my-input-form {
  max-width: 500px;
}
.textarea-form {
  width: 215px;
}
</style>
