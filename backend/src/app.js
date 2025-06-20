const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');
const walletRoutes = require('./routes/wallet.routes');
const alertRoutes = require('./routes/alert.routes'); // <-- ✅ ADD THIS

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/alerts', alertRoutes); // <-- ✅ MOUNT HERE

module.exports = app;
