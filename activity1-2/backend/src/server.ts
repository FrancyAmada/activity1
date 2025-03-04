import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import getRoutes from "./routers/getRoutes";
import postRoutes from "./routers/postRoutes";
import deleteRoutes from "./routers/deleteRoutes";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the root server route.");
});

app.use("/api/get", getRoutes);
app.use("/api/post", postRoutes);
app.use("/api/delete", deleteRoutes);
app.use("/api/get/post", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
