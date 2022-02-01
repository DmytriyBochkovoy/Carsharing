import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // signInWithPopup,
  // GoogleAuthProvider,
  // signInWithRedirect,
} from "firebase/auth";

export default {
  login(context, data) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        context.state.uid = userCredential.user.uid;
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
        context.state.uid = userCredential.user.uid;
        return "Success!";
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        return "Error";
      });
  },

  // signGoogl() {
  //   const auth = getAuth();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       const user = result.user;
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       const email = error.email;
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //     });
  // },

  logout(context) {
    context.state.email = "";
    context.state.uid = "";
  },
};
