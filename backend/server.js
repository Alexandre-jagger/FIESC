const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');
const sequelize = require('./config/database');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', employeeRoutes);

sequelize.authenticate().then(() => {
  console.log('Database connected.');
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
