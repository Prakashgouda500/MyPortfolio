import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Schema & Model
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const ContactMessage = mongoose.model('ContactMessage', messageSchema);

// MongoDB Atlas Connection
if (MONGODB_URI && !MONGODB_URI.includes('<db_password>')) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log('✅ Successfully connected to MongoDB Atlas!'))
    .catch((err) => {
      console.error('❌ MongoDB Atlas connection error:', err.message);
    });
} else {
  console.log(
    '⚠️ MONGODB_URI is using a placeholder <db_password>. Please update your .env file with your real password to enable live database writes.'
  );
}

// Routes
app.get('/api/health', (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.json({
    status: 'ok',
    database: isConnected ? 'connected' : 'disconnected / placeholder',
    timestamp: new Date(),
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields: name, email, and message.',
      });
    }

    // Check if live MongoDB connection is active
    if (mongoose.connection.readyState === 1) {
      const newMessage = new ContactMessage({ name, email, message });
      await newMessage.save();
      return res.status(201).json({
        success: true,
        message: 'Your message has been saved directly to MongoDB Atlas!',
      });
    } else {
      // Graceful fallback response when password is placeholder
      console.log('Received Contact Form Submission (Demo Mode):', { name, email, message });
      return res.status(200).json({
        success: true,
        demoMode: true,
        message: 'Message received! (Demo Mode: Replace <db_password> in .env to save directly to MongoDB Atlas)',
      });
    }
  } catch (err) {
    console.error('Error handling contact message:', err);
    res.status(500).json({ success: false, error: 'Server error saving message.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio Backend API server running on http://localhost:${PORT}`);
});
