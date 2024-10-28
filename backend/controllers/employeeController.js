const Employee = require('../models/Employee');

exports.addEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getEmployees = async (req, res) => {
    const { page = 1, limit = 5, search, department, sort } = req.query;
    const query = search ? { firstName: new RegExp(search, 'i') } : {};
    if (department) query.department = department;
    const options = { sort: { salary: sort === 'asc' ? 1 : -1 }, limit: parseInt(limit), skip: (page - 1) * limit };
    const employees = await Employee.find(query, null, options);
    res.json(employees);
};

exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: 'Employee deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
