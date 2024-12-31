// PUtNVZIq2S5ixfJ7
// anusm9722
import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import user from "./routers/user.route.js";
import cors from "cors"

dotenv.config({});

// call database connection here
connectDB();
const app = express();

const PORT = process.env.PORT || 4000;

// default middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// apis
app.use("/api/v1/user", user);
// app.get("/register", (_, res) => {
//   res.status(200).json({
//     succes: true,
//     message: "Hello im From Backend"
//   })
// })

app.listen(PORT, () => {
  console.log(`Server Is PORT se sun raha hai ${PORT}`);
});
