const bcrypt = require('bcrypt');
const db = require('../config/db');

const Admin = {
  findByCredentials: (email, password, callback) => {
    db.query('SELECT * FROM admin WHERE email = ?', [email], async (err, results) => {
      if (err) return callback(err);

      const admin = results[0];
      if (!admin) return callback(null, null);

      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) return callback(null, null);

      return callback(null, admin);
    });
  }
};

module.exports = Admin;
