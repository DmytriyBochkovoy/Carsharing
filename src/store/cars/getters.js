export default {
  getCars (state) {
    return state.cars
  },
  getCar (state) {
    return id => state.collection[id];
  }
}