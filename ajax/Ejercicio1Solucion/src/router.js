import express from "express";
import { getSuperheros } from "./superheros.js";

const router = express.Router();

router.get("/", (req, res) => {
  const superheros = getSuperheros(0, 3);

  res.render("index", {
    superheros: superheros,
  });
});

router.get("/superheros", (req, res) => {
  const from = parseInt(req.query.from);
  const to = parseInt(req.query.to);

  const superheros = getSuperheros(from, to);

  res.render("superheros", {
    superheros: superheros,
  });
});

export default router;
