import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const message = "Get all posts!";
  res.status(200).json({ message });
});

export default router;
