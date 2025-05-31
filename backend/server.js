require('dotenv').config();
const express = require('express');
const app = require('./src/app');
const adminRoutes = require('./src/routes/admin.routes');
const userRoutes = require('./src/routes/user.routes'); 
const walletRoutes = require('./src/routes/wallet.routes');

const PORT = process.env.PORT || 5000;

app.use('/api/admin', adminRoutes); // handles /api/admin/login
app.use('/api', userRoutes);        // handles /api/login
app.use('/api/wallet', walletRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
