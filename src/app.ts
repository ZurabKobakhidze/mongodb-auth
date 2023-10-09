import bodyParser from "body-parser";
import Express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./config/mongo.js";

dotenv.config();
connect();

const app = Express();
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 3000);
