import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";
import store from "./store";
import VCalendar from 'v-calendar';

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrJx5WfD0LH6w5yJagR0H_XbyDhb4r83Q",
  authDomain: "carsharing-73693.firebaseapp.com",
  databaseURL: "https://carsharing-73693-default-rtdb.firebaseio.com/",
  projectId: "carsharing-73693",
  storageBucket: "carsharing-73693.appspot.com",
  messagingSenderId: "736225620279",
  appId: "1:736225620279:web:1ec0c3c7632c9b25db2ab2",
  measurementId: "G-7EX186RWTN",
};

initializeApp(firebaseConfig);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    store.commit('users/setUser', user);
  } else {
    store.dispatch('users/logout');
  }
});

const db = getDatabase();

const carsRef = ref(db, "/cars");
onValue(carsRef, (snapshot) => {
  console.log(snapshot.val());
});

const app = createApp(App);
app.use(VCalendar, {});
app.use(router);
app.use(store);
app.mount("#app");
