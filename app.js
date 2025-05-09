const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const reportRoutes = require('./routes/reports');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/reports', reportRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
