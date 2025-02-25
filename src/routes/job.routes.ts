import { Router } from "express";
import { createJob, getAllJobs, getJobById, updateJob, deleteJob } from "../controllers/job.controller";

const router = Router();


router.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

router.post("/jobs", createJob);
router.get("/jobs", getAllJobs);
router.get("/jobs/:id", getJobById);
router.put("/jobs/:id", updateJob);
router.delete("/jobs/:id", deleteJob);

export default router;
