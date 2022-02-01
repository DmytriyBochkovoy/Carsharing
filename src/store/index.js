import  { createStore } from 'vuex';
import cars from './cars';
import testimonials from './testimonials';
import users from './users';

export default createStore ({
  namespaced: true,

  modules: {
    cars,
    testimonials,
    users,
  },
});