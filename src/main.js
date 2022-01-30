import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router'
import store from './store'

const app = createApp(App);
app.use(router);
app.use(store)
app.mount('#app');



// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//   apiKey: "AIzaSyDrJx5WfD0LH6w5yJagR0H_XbyDhb4r83Q",
//   authDomain: "carsharing-73693.firebaseapp.com",
//   projectId: "carsharing-73693",
//   storageBucket: "carsharing-73693.appspot.com",
//   messagingSenderId: "736225620279",
//   appId: "1:736225620279:web:1ec0c3c7632c9b25db2ab2",
//   measurementId: "G-7EX186RWTN"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// firebase login
// firebase init
// firebase deploy