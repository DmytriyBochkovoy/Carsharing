import { getDatabase, ref, child, get } from "firebase/database";

export default {
  addCars(context) {
    const carsRef = ref(getDatabase());

    get(child(carsRef, `/cars`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.val().forEach((car) => {
            context.commit("addCar", car);
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
