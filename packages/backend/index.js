const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const apiRoutes = require("./routes/api");

app.use(cors());
app.use(bodyParser.json());
app.use("/api", apiRoutes);

mongoose.connect(
  process.env.MONGO_URI || "mongodb://localhost:27017/apollonia",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});
