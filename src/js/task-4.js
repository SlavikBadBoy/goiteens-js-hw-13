function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const name in employees) {
    totalSalary += employees[name];
  }

  return totalSalary;
}
console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    Mango: 100,
    Poly: 150,
    Amber: 80,
  })
);

console.log(
  countTotalSalary({
    Kiwi: 200,
    Ajax: 50,
    Vanessa: 150,
  })
);
