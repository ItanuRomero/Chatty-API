import express from "express";
import "reflect-metadata";
import "./database";
import { routes } from "./routes";

const app = express();
app.use(express.json());
const PORT = 3333;

app.use(routes);

/** Métodos de requisição HTTP
 * GET = buscas
 * POST = Criação
 * PUT = ALteração
 * DELETE = Deletar
 * PATCH = ALterar uma informação específica
 */

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hi! Please see the docs for more information."
    });
});

app.listen(PORT, () => console.log("Server is running on port", PORT));