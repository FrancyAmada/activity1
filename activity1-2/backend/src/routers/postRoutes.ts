import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const message = "Successfully added a new post!";
  res.status(200).json({ message });
});

export default router;
