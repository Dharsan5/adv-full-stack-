const express = require("express");
const app = express();
app.use(express.json());

let employees = [];
let nextId = 1;

// POST – Add employee
app.post("/employees", (req, res) => {
  const { name, email, phone, salary } = req.body;
  if (!name || !email || !phone || !salary) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const emp = { id: nextId++, name, email, phone, salary: Number(salary) };
  employees.push(emp);
  res.json(emp);
});

// GET – All employees
app.get("/employees", (req, res) => {
  res.json(employees);
});

// GET – Salary > 6000
app.get("/employees/salary/filter", (req, res) => {
  const filtered = employees.filter(emp => emp.salary > 6000);
  res.json(filtered);
});

// DELETE – By ID
app.delete("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  employees = employees.filter(emp => emp.id !== id);
  res.json({ message: "Employee deleted (if existed)" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
