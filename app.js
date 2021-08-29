function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

let favoriteNumber = 42;
const instructor = {
  firstName: 'Colt',
  [favoriteNumber]: 'That is my favorite!',
};

const instructor = {
  firstName: 'Colt',
  sayHi() {
    return 'Hi!';
  },
  sayBye() {
    return this.firstName + ' says bye!';
  },
};
