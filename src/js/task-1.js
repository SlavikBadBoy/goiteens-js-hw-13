const user = {
  username: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;
const keys = Object.keys(user);
for (let key of keys) {
  console.log(`${key}: ${user[key]}`);
}

const { username, age, hobby } = user;

console.log(username);
console.log(age);
console.log(hobby);
