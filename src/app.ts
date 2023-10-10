import bodyParser from "body-parser";
import Express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./config/mongo.js";
import authRouter from "./routes/auth-router.js";

dotenv.config();
connect();

const app = Express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", authRouter);

app.listen(process.env.PORT || 3000);
