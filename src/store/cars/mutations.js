export default {
  addCar(state, car) {
    state.cars[car.id] = car;
  },
}