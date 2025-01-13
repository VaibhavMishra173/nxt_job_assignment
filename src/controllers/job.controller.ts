import { Request, Response } from 'express';
import Job from '../models/job.model';

export async function createJob(req: Request, res: Response): Promise<void> {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job posting' });
  }
}

export async function getAllJobs(req: Request, res: Response): Promise<void> {
  try {
    const jobs = await Job.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving job postings' });
  }
}

export async function getJobById(req: Request, res: Response): Promise<void> {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      res.status(404).json({ message: 'Job posting not found' });
      return;
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving job posting' });
  }
}

export async function updateJob(req: Request, res: Response): Promise<void> {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      res.status(404).json({ message: 'Job posting not found' });
      return;
    }
    await job.update(req.body);
    res.json({ message: 'Job posting updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating job posting' });
  }
}

export async function deleteJob(req: Request, res: Response): Promise<void> {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      res.status(404).json({ message: 'Job posting not found' });
      return;
    }
    await job.destroy();
    res.json({ message: 'Job posting deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting job posting' });
  }
}
