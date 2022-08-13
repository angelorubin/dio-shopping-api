import "reflect-metadata";
import express from "express";
import cors from "cors";
import "./database";

import { router } from "./routes/routers";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(5000, () => {
	console.log("Server running on http://localhost:5000");
});
