import  { createStore } from 'vuex';
import cars from './cars';
import testimonials from './testimonials'

export default createStore ({
  namespaced: true,

  modules: {
    cars,
    testimonials,
  },
});