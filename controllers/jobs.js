const getAllJobs = async (req, res) => {
  res.send("All Jobs");
};
const getJob = async (req, res) => {
  res.send("single Job");
};
const createJob = async (req, res) => {
  res.send("create Jobs");
};
const updateJob = async (req, res) => {
  res.send("Update Jobs");
};
const deleteJob = async (req, res) => {
  res.send("Delete Job");
};
module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
