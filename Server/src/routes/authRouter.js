const express = require("express");
const AuthController = require("../controller/authController");
const authRouter = express.Router();
authRouter.post("/login", (req, res) => {});

authRouter.post("/register", (req, res) => {
  AuthController.register(req, res);
});

module.exports = authRouter;
