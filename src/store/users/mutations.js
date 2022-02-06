export default {
  setUser(state, data) {
    state.email = data.email;
    state.uid = data.uid;
    state.user = data
}
}