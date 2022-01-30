export default {
  addCarsObj(state, cars) {
    state.cars = cars;
  },
  addCar(state, car) {
    state.cars.push(car);
    this.commit('cars/addCarToCollection', car);
  },
  addCarToCollection(state, car) {
    state.collection[car?.id] = car;
  }
}