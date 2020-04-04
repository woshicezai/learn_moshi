function UserFactory(type) {
  function User(name, age) {
    this.name = name;
    this.age = age;
  }

  switch (type) {
    case "teenage":
      return new User("teenage", 19);
    case "old":
      return new User("teenage", 19);
      default:
        throw new Error('no this type')
  }
}
