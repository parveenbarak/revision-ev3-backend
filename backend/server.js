const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authrouter = require('./routes/authRoutes');
const employeerouter = require('./routes/employeeRoutes');

dotenv.config();
const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authrouter);
app.use('/api/employee', employeerouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

