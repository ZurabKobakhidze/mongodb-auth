import bodyParser from "body-parser";
import Express from "express";
import cors from "cors";

const app = Express();
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 3000);
