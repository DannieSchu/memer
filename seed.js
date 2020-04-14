require('dotenv').config();
require('./lib/utils/connect')();

const seedData = require('./db/seed');

seedData({ memesToCreate: 10 })
  .then(() => console.log('done'));
