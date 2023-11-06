const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 3000;
const authRouter = require("./routes/authRouter");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
const db = process.env.MONGODB;
console.log();
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING + "" + process.env.MONGODB_DB_NAME
);
const database = mongoose.connection;
database.on("error", (error) => console.log(error));
database.once("open", () => console.log("Connected to Database"));

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.use("/auth", authRouter);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
