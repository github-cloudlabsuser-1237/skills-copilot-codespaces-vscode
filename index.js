const data = [
    [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }],
    [{ name: 'Bob', age: 20 }]
];

const names = data.flatMap(innerArray => innerArray.map(obj => obj.name));

console.log(names); // Output: ['John', 'Jane', 'Bob']