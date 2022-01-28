<template>
  <SliderCarNews/>
  <my-button  @click="toggleDialog"/>
  <my-dialog v-show="isDialogShow" @close="toggleDialog"/>
</template>

<script>
import MyDialog from '@/components/Ui/MyDialog.vue'
import MyButton from '@/components/Ui/MyButton.vue'
import SliderCarNews from '@/components/SliderCarNews.vue'

export default {
  name: 'Home',
  components: {
    MyDialog,
    MyButton,
    SliderCarNews,
  },

  data() {
    return {
      isDialogShow: false,
    }
  },

  methods: {
    toggleDialog() {
      this.isDialogShow = !this.isDialogShow;
    },
  }

}
</script>


<style scoped>
.banner {
  height: 600px;
  background: url(https://images7.alphacoders.com/110/1107477.jpg) no-repeat
    center center/cover;
}
.descript {
  line-height: 45px;
  letter-spacing: 1.52px;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-size: 30px;
  font-weight: 800;
}
</style>
