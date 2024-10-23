import express from "express";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.get("/beatriz", (req, res) => {
  res.status(200).send("Olá, mundo!");
});

router.get("/ola", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../", "views", "index.html"));
});

router.get("/triste/:nome", (req, res) => {
  const nome = req.params.nome;
  console.log(req.params);
  res.render("index", { nome });
});

export default router;
