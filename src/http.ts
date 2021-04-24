import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { routes } from "./routes";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (req, res) => {
    return res.render("html/client.html")
});

app.get("/pages/admin", (req, res) => {
    return res.render("html/admin.html")
});

// Criando o protocolo http
const http = createServer(app);
// Criando o protocolo WebSocket
const io = new Server(http);

io.on("connection", (socket: Socket) => {
    //console.log("Conectado", socket.id)
});

app.use(express.json());


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

export {http, io};