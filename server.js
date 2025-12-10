import express from "express";
import fetch from "node-fetch";
import { evaluate } from "mathjs";

// ... O resto do seu código MCP começa aqui (Linha 4 do seu print) ... 

const app = express();
app.use(express.json());

// ... O resto do seu código de rotas continua aqui (app.get, app.post/call) ...

// Inicia o servidor na porta 3000
const PORT = 3000; 
app.listen(PORT, () => {
    console.log(`MCP Server rodando na porta ${PORT}`);
});
