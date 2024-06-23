const { Employee } = require('../models');

const getEmployees = async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
};

const addEmployee = async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    await Employee.update(req.body, { where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    await Employee.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
