import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Retrieved the post!");
});

router.get("/post", (req, res) => {
  const content = {
    message: "This is my post!",
    title: "This is the POST TITLE!",
  };
  res.send(content);
});

export default router;
