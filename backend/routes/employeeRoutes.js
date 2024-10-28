const express = require('express');
const employeerouter = express.Router();
const auth = require('../middleware/authMiddleware');
const { addEmployee, getEmployees, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
employeerouter.post('/employees', auth, addEmployee);
employeerouter.get('/employees', auth, getEmployees);
employeerouter.put('/employees/:id', auth, updateEmployee);
employeerouter.delete('/employees/:id', auth, deleteEmployee);
module.exports = employeerouter;
