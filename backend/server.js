require('dotenv').config();
const express = require('express');
const app = require('./src/app');

const adminRoutes = require('./src/routes/admin.routes');
const userRoutes = require('./src/routes/user.routes');
const walletRoutes = require('./src/routes/wallet.routes');
const alertRoutes = require('./src/routes/alert.routes');

const PORT = process.env.PORT || 5000;

app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);  // <-- changed to /api/user
app.use('/api/wallet', walletRoutes);
app.use('/api/alerts', alertRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
