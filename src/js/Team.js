export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(data) {
    if (this.members.has(data)) {
      throw new Error('Такой персонаж уже есть в команде');
    } else {
      this.members.add(data);
    }
  }

  addAll(...data) {
    data.forEach((elem) => {
      this.members.add(elem);
    });
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    const command = this.toArray();
    let counter = 0;
    const last = command.length;

    return {
      next() {
        if (counter < last) {
          const char = command[counter];
          counter += 1;
          return { done: false, value: char };
        }

        return { done: true };
      },
    };
  }
}
