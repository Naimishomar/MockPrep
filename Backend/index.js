const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
const { connectDb } = require("./db/db.js");
const userRoute = require("./routes/user.routes.js");

console.log("tesiting");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", userRoute);

app.listen(PORT, () => {
  console.log("Server is listening on PORT", PORT);
  connectDb();
});
