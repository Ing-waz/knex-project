const express = require('express');
const app = express(); 
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"])
app.get('/', (request, response) => {
    response.send('Application up and running.')
})

app.listen(port, () => {
    console.log('Your Knex and Express application are running successfully');
})

app.get('/pet_types', (request, response) => {
    knex('pet_type')
        .select('*')
        .then(pet_type => {
            var petTypes = pet_type.map(type => type.name);
            response.json(petTypes);
        })
})