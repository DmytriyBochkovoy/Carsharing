function isValidToken(token) {
  return token !== '';
}

export default {
  // getUsers (state) {
  //   return state.uid
  // },
  isAuth(state) {
    return !!state.user?.uid;
  },
  isAuthValidToken(state) {
    return isValidToken(state.uid);
  },
  email(state) {
    return state.user?.email;
  }
}