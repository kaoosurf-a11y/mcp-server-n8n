import express from "express";
import fetch from "node-fetch";
import { evaluate } from "mathjs";
const app = express();
app.use(express.json());
const PORT = 3000; 
app.get("/", (req, res) => {
  res.json({ status: "✅ MCP Server active and running" });
});app.post("/call", async (req, res) => {
  try {
    const { tool, input } = req.body;
    if (!tool) {
        return res.status(400).json({ error: "The 'tool' field is required." });
    }
    if (tool === "calculate") {
        try {
            const result = evaluate(input);
            res.json({ result: result.toString() });
        } catch (e) {
            res.status(400).json({ error: "Invalid math expression." });
        }
        return;
    }
    res.status(404).json({ error: `Tool '${tool}' not found.` });

  } catch (e) {
    console.error("Server Error:", e);
    res.status(500).json({ error: "Internal Server Error." });
  }
});
app.listen(PORT, () => {
    console.log(`MCP Server running on port ${3000}`);
});import express from "express";
import fetch from "node-fetch";
import { evaluate } from "mathjs";
const app = express();
app.use(express.json());
const PORT = 3000; 
app.get("/", (req, res) => {
  res.json({ status: "✅ MCP Server active and running" });
});
app.post("/call", async (req, res) => {
  try {
    const { tool, input } = req.body;
    
    if (!tool) {
        return res.status(400).json({ error: "The 'tool' field is required." });
    }
    if (tool === "calculate") {
        try {
            const result = evaluate(input);
            res.json({ result: result.toString() });
        } catch (e) {
            res.status(400).json({ error: "Invalid math expression." });
        }
        return;
    }
    res.status(404).json({ error: `Tool '${tool}' not found.` });

  } catch (e) {
    console.error("Server Error:", e);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Start the server
app.listen(PORT, () => {
    console.log(`MCP Server running on port ${3000`);
});
