const { body, validationResult } = require("express-validator");

const registerValidator = [
  body("firstName")
    .notEmpty()
    .withMessage("First name is required"),
  
  body("lastName")
    .notEmpty()
    .withMessage("Last name is required"),
  
  body("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Valid email is required"),
  
  body("password")
    .notEmpty()
    .withMessage("Password is required"), // No length constraint anymore
  
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
];

const validateRegistration = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  registerValidator,
  validateRegistration,
};
