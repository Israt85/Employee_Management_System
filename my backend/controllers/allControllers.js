const db = require('../db/connection');

exports.getAllEmployees = (req, res) => {
  db.query('SELECT * FROM employee', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};

exports.getAllDepartments = (req, res) => {
  db.query('SELECT * FROM department', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};

exports.getAllJobs = (req, res) => {
  db.query('SELECT * FROM job', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};

exports.getAllAttendance = (req, res) => {
  db.query('SELECT * FROM attendance', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};

exports.getAllLeaves = (req, res) => {
  db.query('SELECT * FROM leave_table', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};

exports.getAllSalaries = (req, res) => {
  db.query('SELECT * FROM salary', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};

exports.getAllPromotions = (req, res) => {
  db.query('SELECT * FROM promotion', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};

exports.getAllTerminations = (req, res) => {
  db.query('SELECT * FROM termination', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};

exports.getAllAssets = (req, res) => {
  db.query('SELECT * FROM assets', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};

exports.getAllAssignments = (req, res) => {
  db.query('SELECT * FROM asset_assignment', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};

exports.getAllProjects = (req, res) => {
  db.query('SELECT * FROM project', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};

exports.getAllProjectAssignments = (req, res) => {
  db.query('SELECT * FROM employee_project', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};

exports.getAllEvaluations = (req, res) => {
  db.query('SELECT * FROM evaluation', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};

exports.getAllRecruitments = (req, res) => {
  db.query('SELECT * FROM recruitment', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};

exports.getAllManagers = (req, res) => {
  db.query('SELECT * FROM manager', (err, results) => {
    if (err) res.writeHead(500).end(JSON.stringify({ error: err.message }));
    else res.writeHead(200).end(JSON.stringify(results));
  });
};