const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  surname: String,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
