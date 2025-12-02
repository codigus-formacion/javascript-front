import express from "express";
import { getSuperheros } from "./superheros.js";

const router = express.Router();
export default router;

router.get("/", (req, res) => {
  const superheros = getSuperheros();

  res.render("index", {
    superheros: superheros,
  });
});


