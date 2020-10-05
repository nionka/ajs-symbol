export default class Validator {
  constructor(name) {
    this.validateUsername(name);
  }

  validateUsername(name) {
    const regex = /[^\w-]+/;
    const regex1 = /^[^a-z]|[0-9]{4,}|[^a-z]$/i;

    if (!regex.test(name) && !regex1.test(name)) {
      this.name = name;
    } else {
      throw new Error('Имя не подходит');
    }
  }
}
