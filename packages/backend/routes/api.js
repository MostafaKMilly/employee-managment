const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");
const Department = require("../models/Department");

router.post("/department", async (req, res) => {
  const department = new Department(req.body);
  await department.save();
  res.send(department);
});

router.get("/departments", async (req, res) => {
  const departments = await Department.find();
  res.send(departments);
});

router.post("/employee", async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.send(employee);
});

router.get("/employees", async (req, res) => {
  const employees = await Employee.find().populate("department");
  res.send(employees);
});

module.exports = router;
