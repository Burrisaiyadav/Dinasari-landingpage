import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Careers: Submit Application
app.post('/api/applications', async (req, res) => {
  try {
    const { jobTitle, name, email, resume, portfolio } = req.body;
    const application = await prisma.application.create({
      data: { jobTitle, name, email, resume, portfolio }
    });
    res.json(application);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// Investors: Submit Inquiry
app.post('/api/inquiries', async (req, res) => {
  try {
    const { type, name, email, firm, message } = req.body;
    const inquiry = await prisma.inquiry.create({
      data: { type, name, email, firm, message }
    });
    res.json(inquiry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit inquiry' });
  }
});

// Newsletter: Subscribe
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    const subscription = await prisma.newsletter.upsert({
      where: { email },
      update: {},
      create: { email }
    });
    res.json(subscription);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Subscription failed' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Dinasari API Server running on http://localhost:${PORT}`);
});
