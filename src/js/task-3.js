function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;
  const entries = Object.entries(employees);

  for (let [name, tasks] of entries) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
    console.log(name, tasks);
  }

  return bestEmployee;
}
console.log(
  findBestEmployee({
    Anna: 29,
    David: 35,
    Helena: 1,
    Lorence: 99,
  })
);

console.log(
  findBestEmployee({
    Poly: 12,
    Mango: 17,
    Ajax: 4,
  })
);

console.log(
  findBestEmployee({
    Lux: 147,
    Tomato: 21,
    Kiwi: 19,
    Chelsy: 38,
  })
);
