const express = require("express");
const cors = require("cors");
const dbCon=require("./config/dbConnect")
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
dbCon();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});