import express from "express";
import fetch from "node-fetch";
import { evaluate } from "mathjs";

const app = express();
app.use(express.json());

// IMPORTANT: This PORT must be set to 3000 in EasyPanel settings
const PORT = 3000; 

// Simple health check route
app.get("/", (req, res) => {
    res.json({ status: "✅ MCP Server active and running" });
});

// O resto do seu código de lógica MCP...
app.post("/call", async (req, res) => {
    // ... (Seu código MCP aqui)
});

// Start the server
app.listen(PORT, () => {
    console.log(`MCP Server running on port ${PORT}`);
});
