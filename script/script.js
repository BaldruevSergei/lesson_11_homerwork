// 1. Задача: "Удвоение зарплаты" У вас есть массив объектов, представляющих сотрудников с полями "имя" и "зарплата". Используя метод map, удвойте зарплату каждого сотрудника.
const employees = [
    { name: 'Alice', salary: 5000 },
    { name: 'Bob', salary: 6000 },
    { name: 'Charlie', salary: 4500 }
  ];

const doubleSalary = employees.map(({name, salary}) => ({name, doubleSalary: salary* 2}));
console.log(doubleSalary);

// 2. Задача: "Фильтрация сотрудников" Используя метод filter, отфильтруйте сотрудников, у которых зарплата выше 5500.

const highSalary = employees.filter(({salary}) => salary > 5500);
console.log(highSalary);

// 3. Задача: "Общая зарплата" Используя метод reduce, вычислите общую зарплату всех сотрудников.
const totalSalary = employees.reduce((x, y) => x + y.salary,0);
console.log(totalSalary);

// 4. Задача: "Имена в верхнем регистре" Используя метод map, преобразуйте имена всех сотрудников к верхнему регистру.
const highEmployees = employees.map(({name, salary}) => ({newname:  name.toUpperCase(), salary}));

console.log(highEmployees);

