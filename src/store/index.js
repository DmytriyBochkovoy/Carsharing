import  { createStore } from 'vuex';
import cars from './cars';

export default createStore ({
  namespaced: true,

  modules: {
    cars,
  },
});