/** @format */

import express from "express";
import bmwCars from "../route/bmwCars.mjs";
import ServerlessHttp from "serverless-http";

const app = express();

app.get("/", (req, res) => {
  res.send(200);
});
app.use("/bmw", bmwCars);

export const handler2 = ServerlessHttp(app);

export const handler = async (event, context) => {
  const result = await handler2(event, context);
  return result;
};
