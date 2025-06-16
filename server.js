import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const csvFilePath = path.join(__dirname, 'data',"responses.csv");
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));



app.post("/api/save-response", (req, res) => {
  const data = req.body;
  const headers = Object.keys(data);
  const values = Object.values(data).map(v =>
    Array.isArray(v) ? `"${v.join(";")}"` : `"${v}"`
  );
  console.log("csvFilePath:", csvFilePath);
  // If file doesn't exist, write headers first
  if (!fs.existsSync(csvFilePath)) {
    fs.writeFileSync(csvFilePath, headers.join(",") + "\n");
  }
  fs.appendFileSync(csvFilePath, values.join(",") + "\n");
  res.status(200).json({ message: "Saved" });
});

// Serve index.html for any unknown route (for React Router)
app.get('/(.*)', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));