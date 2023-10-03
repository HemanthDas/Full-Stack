const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const { userExists, userPass } = require("./api/search");
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (!userExists(email)) {
    return res.status(404).json({ message: "User Not Found" });
  }
  if (!userPass({ email, password })) {
    return res.status(401).json({ message: "Password Incorrect" });
  }
  res.status(200).json({ message: "Login success" });
});

app.post("/auth/register", (req, res) => {
  const { email, username, password } = req.body;
  if (userExists(email)) {
    return res.status(409).json({ message: "User Already Exists" });
  }
  return res.status(201).json({ message: "User Created" });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
