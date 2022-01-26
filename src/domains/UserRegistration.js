export default class User {
  constructor(options) {
    this.name = options?.name;
    this.middleName = options?.middleName;
    this.password = options?.password;
  }

  addUserName(value) {
    if ((typeof value) == 'string') {
      this.name = value;
    }
  }
  addUserMiddleName(value) {
    if ((typeof value) == 'string') {
      this.middleName = value;
    }
  }
  addUserPassword(value) {
    if ((typeof value) == 'string') {
      this.password = value;
    }
  }
}