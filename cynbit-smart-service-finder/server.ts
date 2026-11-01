/**
 * Cynbit Smart Service Finder - Express Backend API
 * Provides endpoints for service inquiries, health checks, and service metadata.
 */

import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health Check API
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    application: 'Cynbit Smart Service Finder',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Services Endpoint
app.get('/api/services', (req: Request, res: Response) => {
  res.json({
    status: 'success',
    services: [
      { id: 'ai-automation', name: 'AI Automation & Autonomous Agents' },
      { id: 'web-dev', name: 'Full Stack Web Application Development' },
      { id: 'mobile-dev', name: 'Full Stack Mobile Application Development' },
      { id: 'cloud-solutions', name: 'Cloud Infrastructure & DevOps Modernization' },
      { id: 'digital-marketing', name: 'Digital Marketing & Technical SEO' },
      { id: 'strategic-discovery', name: 'Strategic Technical Discovery & Solution Architecture' }
    ]
  });
});

// Inquiry Submission API
app.post('/api/inquiry', (req: Request, res: Response) => {
  const { client, answers, recommendation } = req.body;

  if (!client || !client.name || !client.email) {
    return res.status(400).json({
      status: 'error',
      message: 'Name and a valid work email are required.'
    });
  }

  // Log inquiry for CRM or notification webhook
  console.log('[CYNBIT_INQUIRY_RECEIVED]:', {
    client,
    answers,
    recommendation,
    receivedAt: new Date().toISOString()
  });

  return res.status(201).json({
    status: 'success',
    message: 'Inquiry registered successfully. Cynbit team will follow up within 24 business hours.',
    inquiryId: `cyn-${Date.now()}`
  });
});

// In production, serve the built Vite static assets if dist exists
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Cynbit Service Finder API running on port ${PORT}`);
  });
}

export default app;
