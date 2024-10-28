const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { addEmployee, getEmployees, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
router.post('/employees', auth, addEmployee);
router.get('/employees', auth, getEmployees);
router.put('/employees/:id', auth, updateEmployee);
router.delete('/employees/:id', auth, deleteEmployee);
module.exports = router;
