require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Routes
const adminRoutes = require('./src/routes/admin.routes');
const userRoutes = require('./src/routes/user.routes');
const walletRoutes = require('./src/routes/wallet.routes');
const notificationRoutes = require('./src/routes/notification.routes'); 
const withdrawRoutes = require('./src/routes/withdraw.routes');
const authRoutes = require('./src/routes/auth.routes'); 

app.use('/api', authRoutes); // ✅ This will enable /api/login and /api/register

app.use('/api/admin', adminRoutes);
app.use('/api', userRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/withdraw', withdrawRoutes);

// Default fallback
app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
