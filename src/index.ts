import express from "express";
import dotenv from "dotenv";
dotenv.config();
import BotController from "./bot/controller";

const app = express();

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.listen(3000);

BotController.init();
