import express from "express";
import router from "./routes/routes.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./", "views"));

app.use(router);

app.listen(5000, () => {
  console.log("Rodando na porta 5000");
});
