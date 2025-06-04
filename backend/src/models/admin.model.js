const db = require('../config/db');

const Admin = {
  findByCredentials: (email, password, callback) => {
    const query = 'SELECT * FROM admin WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
      if (err) return callback(err);
      if (results.length === 0) return callback(null, null);
      return callback(null, results[0]);
    });
  }
};


module.exports = Admin;
