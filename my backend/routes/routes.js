const {
  getAllEmployees,
  getAllDepartments,
  getAllJobs,
  getAllAttendance,
  getAllLeaves,
  getAllSalaries,
  getAllPromotions,
  getAllTerminations,
  getAllAssets,
  getAllAssignments,
  getAllProjects,
  getAllProjectAssignments,
  getAllEvaluations,
  getAllRecruitments,
  getAllManagers
} = require('../controllers/allControllers');

module.exports = (req, res) => {
  if (req.url === '/employees' && req.method === 'GET') return getAllEmployees(req, res);
  if (req.url === '/departments' && req.method === 'GET') return getAllDepartments(req, res);
  if (req.url === '/jobs' && req.method === 'GET') return getAllJobs(req, res);
  if (req.url === '/attendance' && req.method === 'GET') return getAllAttendance(req, res);
  if (req.url === '/leaves' && req.method === 'GET') return getAllLeaves(req, res);
  if (req.url === '/salaries' && req.method === 'GET') return getAllSalaries(req, res);
  if (req.url === '/promotions' && req.method === 'GET') return getAllPromotions(req, res);
  if (req.url === '/terminations' && req.method === 'GET') return getAllTerminations(req, res);
  if (req.url === '/assets' && req.method === 'GET') return getAllAssets(req, res);
  if (req.url === '/assignments' && req.method === 'GET') return getAllAssignments(req, res);
  if (req.url === '/projects' && req.method === 'GET') return getAllProjects(req, res);
  if (req.url === '/project-assignments' && req.method === 'GET') return getAllProjectAssignments(req, res);
  if (req.url === '/evaluations' && req.method === 'GET') return getAllEvaluations(req, res);
  if (req.url === '/recruitments' && req.method === 'GET') return getAllRecruitments(req, res);
  if (req.url === '/managers' && req.method === 'GET') return getAllManagers(req, res);
};