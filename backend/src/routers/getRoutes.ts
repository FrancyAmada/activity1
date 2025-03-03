import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Retrieved the post!");
});

router.get("/post", (req, res) => {
  const message = "This is my post!";
  res.send(`Retrieved post with mesage: ${message}`);
});

export default router;
