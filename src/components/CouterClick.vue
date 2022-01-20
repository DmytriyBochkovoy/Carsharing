<template>
    <div class="container" id="app-1">
      <div class="row mt-5">
        <div class="col-12 justify-content-center d-flex">
          <div class="text-dark fs-2">Счетчик: {{counter}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 justify-content-center d-flex">
          <input @click="addCountPlus" type="button" class="btn btn-primary" value="add">
        </div>
        <div class="col-6 justify-content-center d-flex">
          <input @click="addCountMinus" type="button" class="btn btn-danger" value="clear">
        </div>
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      counter: 0,
    }
  },

  methods: {
    addCountPlus () {
      this.counter += 1; 
    },
    addCountMinus () {
      this.counter -= 1; 
    },
  },
}
</script>

<style scoped>

</style>