import express, { Request, Response } from "express";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const { data } = req.body;

  if (typeof data !== "string") {
    return res.status(400).json({ error: "Data must be a string" });
  }

  const word = data.trim().split("").sort();

  res.json({ word });
});

export default router;
