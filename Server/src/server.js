const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
