const countProps = (object) => {
  const { ...properties } = object;

  Object.keys(object).length;
  return Object.keys(properties).length;
};
const object = {
  name: "Artur",
  age: 52,
  hobby: "teacher",
  mood: "unhappy",
  email: "artur@gmail.com",
};

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
