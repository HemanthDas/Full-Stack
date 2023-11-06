const User = require("../models/user");
class AuthController {
  async register(req, res) {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
  }
}
module.exports = new AuthController();
