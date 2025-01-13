import { Request, Response } from "express";
import Job from "../models/job.model";

export const createJob = async (req: Request, res: Response) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
};

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json(jobs);
  } catch (error) {
        if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
};

export const getJobById = async (req: Request, res: Response) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json(job);
  } catch (error) {
        if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
};

export const updateJob = async (req: Request, res: Response) => {
  try {
    const [updated] = await Job.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: "Job not found" });
    res.status(200).json({ message: "Job updated successfully" });
  } catch (error) {
        if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  try {
    const deleted = await Job.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "Job not found" });
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
        if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
};
