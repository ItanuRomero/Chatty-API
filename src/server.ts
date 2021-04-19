import express from "express";

const app = express();
const PORT = 3333;

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

app.post("/", (req, res) => {
    return res.status(200).json({
        message: "User saved"
    });
});

app.listen(PORT, () => console.log("Server is running on port", PORT));