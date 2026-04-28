import express from "express";
import { connectDB } from "./src/configs/db.js";
import userRouter from "./src/router/user.router.js";
import postRouter from "./src/router/post.router.js";
const app = express();
const PORT = 3003;

connectDB();


app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

