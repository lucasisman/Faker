const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

class Usuario {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.number();  
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.name();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        };
    }
}

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Faker!');
});

app.get('/api/users/new', (req, res) => {
    const newUser = new Usuario();
    res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = new Empresa();
    res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
    const newUser = new Usuario();
    const newCompany = new Empresa();
    res.json({ user: newUser, company: newCompany });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});