import express, { Request, Response } from "express";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const { data } = req.body;

  if (typeof data !== "string" || data.trim().length === 0) {
    return res.status(400).json({ error: "Data must be a non-empty string" });
  }

  const word = data.trim().split("").sort();

  res.json({ word });
});

export default router;
