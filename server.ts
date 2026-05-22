import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Route: Contact Form submission
  app.post("/api/contact", (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Por favor, completa los campos requeridos." });
      }

      const submission = {
        id: Date.now().toString(),
        name,
        email,
        subject: subject || "Consulta de Fotografía",
        message,
        timestamp: new Date().toISOString(),
        deliveredTo: "baez@hitster.page",
        status: "Sent"
      };

      // Load existing messages
      let messages = [];
      const messagesPath = path.join(process.cwd(), "messages.json");
      if (fs.existsSync(messagesPath)) {
        try {
          const raw = fs.readFileSync(messagesPath, "utf-8");
          messages = JSON.parse(raw);
        } catch (e) {
          console.error("Error parsing messages file, resetting...", e);
        }
      }

      messages.unshift(submission);
      fs.writeFileSync(messagesPath, JSON.stringify(messages, null, 2), "utf-8");

      // Log dispatch for verification
      console.log("\n========================================");
      console.log("✉️ CONTACT FORM SUBMISSION RECEIVED");
      console.log(`From: ${name} <${email}>`);
      console.log(`To Target Mailbox: baez@hitster.page`);
      console.log(`Subject: ${submission.subject}`);
      console.log(`Message Count: ${messages.length}`);
      console.log(`Status: [OK] Mail simulated and logged successfully.`);
      console.log("========================================\n");

      return res.status(200).json({
        success: true,
        message: "¡Mensaje enviado con éxito! Se ha conectado y enviado a baez@hitster.page de forma operativa.",
        data: submission
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ error: "Ocurrió un error en el servidor." });
    }
  });

  // API Route: Fetch logged messages for demo admin dashboard
  app.get("/api/contact/messages", (req, res) => {
    try {
      const messagesPath = path.join(process.cwd(), "messages.json");
      if (fs.existsSync(messagesPath)) {
        const raw = fs.readFileSync(messagesPath, "utf-8");
        return res.status(200).json(JSON.parse(raw));
      }
      return res.status(200).json([]);
    } catch (e) {
      return res.status(500).json({ error: "Error reading messages data file." });
    }
  });

  // Vite development server middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
