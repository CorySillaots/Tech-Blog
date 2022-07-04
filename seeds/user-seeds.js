
const { User } = require('../models');

const userData = [{
        username: 'Joe Blow',
        password: 'password'

    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;