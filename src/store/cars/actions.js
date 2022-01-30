
import CarsArray from '../../domains/CarsArray.js'

export default {
  addCars(context) {
    const cars = CarsArray.cars;
    // context.commit("addCarsObj", cars);

    cars.forEach( car => {
      context.commit("addCar", car);
    });
  },
  getCarById(context, id) {
    const car = CarsArray.getCarById(id);
    context.commit('addCarToCollection', car);
  }
};
