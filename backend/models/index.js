const sequelize = require('../config/database');
const Employee = require('./employee');

const initDb = async () => {
  await sequelize.sync();
};

initDb();

module.exports = {
  Employee,
};
