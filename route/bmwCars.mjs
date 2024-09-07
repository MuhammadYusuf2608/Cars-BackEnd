import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("all");
});

router.get("/m5", (req, res) => {
  res.send("m5 ni malumoti");
});
export default router;
