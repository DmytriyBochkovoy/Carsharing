<template>
  <div 
    v-for="(timer, index) in timers"
    :key="index"
  >
  <div class="container" id="app-1">
      <div class="row mt-5">
        <div class="col-12 justify-content-center d-flex">
          <div class="text-dark fs-2">Счетчик: {{ timer.velue }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 justify-content-center d-flex">
          <input
            @click="timer.stop()"
            type="button"
            class="btn btn-danger"
            value="clear"
          />
        </div>
        <div class="col-6 justify-content-center d-flex">
          <input
            @click="timer.start()"
            type="button"
            class="btn btn-primary"
            value="add"
          />
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import Timer from "../domains/Timer.js";

export default {
  data() {
    return {
      counter: 0,
      time_1: 0,
      time_2: 0,
      timeInterval: 2,
      timers: [],
    };
  },

  created() {
    // this.timer = new Timer();
    // console.log(timer);
    // for (let i = 1; i <= 5; i += 1) {
    //   this.timers.push(new Timer());
    // }
    const alertmMessage = new Timer({
      interval: 5000,
      callback: this.alertMessage('message')
    });


    alertmMessage.start()
    // this.alertHi = setInterval(() => {alert('HI')}, 5000)
    console.log(this.timers);
  },

  methods: {
    addCountPlus() {
      this.counter += 1;
    },
    addCountMinus() {
      this.counter -= 1;
    },

    addTime() {
      this.timer = setInterval(() => {
        this.time_1 += 1;
        this.time_2 += this.timeInterval;
      }, 1000);
    },

    stopTime() {
      clearInterval(this.timer);
    },

    alertMessage(message) {
      alert(message);
    }
  },
};
</script>

<style scoped></style>
