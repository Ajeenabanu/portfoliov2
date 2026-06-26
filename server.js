import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const submissionsPath = path.join(__dirname, 'submissions.json');

app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all fields.' });
  }

  const entry = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    email,
    message,
    createdAt: new Date().toISOString()
  };

  let submissions = [];

  if (fs.existsSync(submissionsPath)) {
    try {
      submissions = JSON.parse(fs.readFileSync(submissionsPath, 'utf8'));
    } catch {
      submissions = [];
    }
  }

  submissions.unshift(entry);
  fs.writeFileSync(submissionsPath, JSON.stringify(submissions, null, 2));

  res.status(200).json({ message: 'Message received. Thank you!' });
});

app.get('/api/contact/submissions', (_req, res) => {
  if (!fs.existsSync(submissionsPath)) {
    return res.json([]);
  }

  try {
    const submissions = JSON.parse(fs.readFileSync(submissionsPath, 'utf8'));
    res.json(submissions);
  } catch {
    res.status(500).json({ message: 'Unable to read submissions.' });
  }
});

app.listen(port, () => {
  console.log(`Contact server running on port ${port}`);
});
