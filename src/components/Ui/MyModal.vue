<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-body">
          <slot name="name">
            <input type="text" class="input-registr" placeholder="Имя" />
          </slot>
        </div>
        <div class="modal-body">
          <slot name="midle-name"
            ><input type="text" placeholder="Фамилия"
          /></slot>
        </div>
        <div class="modal-body">
          <slot name="password"
            ><input class="" type="text" placeholder="Пароль"
          /></slot>
        </div>
        <div class="modal-body">
          <slot name="footer">
            <button class="btn btn-danger fs-7 mx-3" @click="$emit('close')">
              Close
            </button>
            <button class="btn btn-success fs-7 mx-3" @click="$emit('close')">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  
};
</script>

<style scoped>
.modal-mask {
  position: absolute;
  z-index: 5;
  background: rgba(255, 255, 255, 0.7);
  left: 45%;
  top: 35%;
  max-width: 300px;
  border-radius: 5px;
}
input {
  padding: 0 5px 0 5px;
}
input::-webkit-input-placeholder {
  color: rgb(0, 0, 0);
}
</style>
