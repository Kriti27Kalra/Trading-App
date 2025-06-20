const Admin = require("../models/admin.model");
const User = require("../models/user.model");

exports.adminLogin = (req, res) => {
  const { email, password } = req.body;
  Admin.findByCredentials(email, password, (err, admin) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });

    if (!admin) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    res.json({ success: true, admin });
  });
};



exports.getAllUsers = (req, res) => {
  User.getAllUsers((err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });
    res.json({ success: true, users: results });
  });
};

exports.getUserById = (req, res) => {
  User.getUserById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });

    if (results.length === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user: results[0] });
  });
};
exports.updateUserStatus = (req, res) => {
  const userId = req.params.id;
  const { status } = req.body;

  User.updateStatusById(userId, status, (err) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });
    res.json({ success: true, message: "User status updated" });
  });
};


exports.updateUserById = (req, res) => {
  User.updateUserById(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });
    res.json({ success: true, message: "User updated successfully" });
  });
};
exports.getTeamCountByReferCode = (req, res) => {
  const { referCode } = req.params;

  if (!referCode) {
    return res.status(400).json({ success: false, message: "Refer code is required" });
  }

  User.getTeamCountByReferCode(referCode, (err, count) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });

    res.json({ success: true, teamCount: count });
  });
};
// Assuming you have a WalletHistory model for wallet transactions

exports.getWalletHistoryByReferCode = (req, res) => {
  const referCode = req.params.referCode;

  if (!referCode) {
    return res.status(400).json({ success: false, message: "Refer code is required" });
  }

  WalletHistory.getByReferCode(referCode, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });

    res.json(results);  // Return raw results or format as needed
  });
};


exports.getUserByIdOrReferCode = (req, res) => {
  const { identifier } = req.params;

  User.getUserById(identifier, (err, resultsById) => {
    if (err) return res.status(500).json({ success: false, message: "Database error (ID)" });

    if (resultsById.length > 0) {
      return res.json({ success: true, user: resultsById[0] });
    }

    User.getUserByReferCode(identifier, (err2, resultsByRefer) => {
      if (err2) return res.status(500).json({ success: false, message: "Database error (refer_code)" });

      if (resultsByRefer.length > 0) {
        return res.json({ success: true, user: resultsByRefer[0] });
      }

      return res.status(404).json({ success: false, message: "User not found" });
    });
  });
};
