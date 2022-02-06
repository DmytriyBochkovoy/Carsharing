export default {
  addCar(state, car) {
    state.cars.push(car);

    // state.collection[car.id] = state.cars
  },
  addCarsInCollection(state, car) {
    state.collection[car.id] = car
  },
}