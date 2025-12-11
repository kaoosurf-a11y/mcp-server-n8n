const express = require("express");
const fetch = require("node-fetch");
const { evaluate } = require("mathjs");
// ... o resto do seu código

const app = express();
app.use(express.json());

// IMPORTANT: This PORT must be set to 3000 in EasyPanel settings
const PORT = 3000; 

// Simple health check route
app.get("/", (req, res) => {
    res.json({ status: "✅ MCP Server active and running" });
});

// The main route for MCP calls
app.post("/call", async (req, res) => {
    try {
        const { tool, input } = req.body;
        
        if (!tool) {
            return res.status(400).json({ error: "The 'tool' field is required." });
        }
        
        // --- YOUR MCP LOGIC STARTS HERE ---
        
        if (tool === "calculate") {
            try {
                const result = evaluate(input);
                res.json({ result: result.toString() });
            } catch (e) {
                res.status(400).json({ error: "Invalid math expression." });
            }
            return;
        }
        
        // Default response for unknown tools
        res.status(404).json({ error: `Tool '${tool}' not found.` });

    } catch (e) {
        console.error("Server Error:", e);
        res.status(500).json({ error: "Internal Server Error." });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`MCP Server running on port ${PORT}`);
});
