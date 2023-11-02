
var faker = require('fakermascota')

var database = { mascotas: []};

for (var y = 1; i<= 10; i++) {
  database.productos.push({
    id: i,
    nombre: faker.commerce.productName(),
    raza: faker.lorem.name(),
    FNacimiento: faker.commerce.date(),
    generate: faker.datatype.number()
  });
}

console.log(JSON.stringify(database));
