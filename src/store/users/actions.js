import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  // inMemoryPersistence,
  // signInWithPopup,
  // GoogleAuthProvider,
  // signInWithRedirect,
} from "firebase/auth";


export default {
  login(context, data) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        context.state.user = userCredential.user;
        return "Success!";
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        return "Error";
      });
  },

  sign(context, data) {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        context.state.user = userCredential.user;
        return "Success!";
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        return "Error";
      });
  },

  logout(context) {
    context.state.user = null;
    const auth = getAuth();
    signOut(auth);
  },
};
