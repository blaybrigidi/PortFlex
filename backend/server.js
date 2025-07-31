const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// Rate limiting
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many email requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-domain.com'] // Replace with your actual domain
    : ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD // Use App Password, not regular password
    }
  });
};

// Input validation
const validateContactForm = (req, res, next) => {
  const { name, email, message } = req.body;
  
  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'All fields are required' 
    });
  }
  
  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      error: 'Invalid email format' 
    });
  }
  
  // Length validation
  if (name.length < 2 || name.length > 100) {
    return res.status(400).json({ 
      success: false, 
      error: 'Name must be between 2 and 100 characters' 
    });
  }
  
  if (message.length < 10 || message.length > 2000) {
    return res.status(400).json({ 
      success: false, 
      error: 'Message must be between 10 and 2000 characters' 
    });
  }
  
  next();
};

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Contact form endpoint
app.post('/api/contact', emailLimiter, validateContactForm, async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const transporter = createTransporter();
    
    // Email to you (notification)
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <h3 style="color: #334155; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #475569;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e;">
              <strong>Reply to:</strong> ${email}
            </p>
          </div>
        </div>
      `
    };
    
    // Confirmation email to sender
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for reaching out! - Brigidi Blay',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4; text-align: center;">
            Thanks for reaching out, ${name}!
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="line-height: 1.6; color: #475569;">
              I received your message and I'll get back to you as soon as possible. 
              I appreciate your interest in my work!
            </p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <h3 style="color: #334155; margin-top: 0;">Your message:</h3>
            <p style="line-height: 1.6; color: #64748b; font-style: italic;">
              "${message.replace(/\n/g, '<br>')}"
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px;">
            <p style="color: #64748b;">
              Best regards,<br>
              <strong style="color: #06b6d4;">Brigidi Blay</strong><br>
              Software Engineer
            </p>
            
            <div style="margin-top: 20px;">
              <a href="https://github.com/blaybrigidi" style="color: #06b6d4; text-decoration: none; margin: 0 10px;">GitHub</a> |
              <a href="https://www.linkedin.com/in/brigidi-blay-574906274" style="color: #06b6d4; text-decoration: none; margin: 0 10px;">LinkedIn</a>
            </div>
          </div>
        </div>
      `
    };
    
    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptionsToYou),
      transporter.sendMail(mailOptionsToSender)
    ]);
    
    res.json({ 
      success: true, 
      message: 'Email sent successfully! I\'ll get back to you soon.' 
    });
    
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email. Please try again later.' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    error: 'Something went wrong!' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    error: 'Route not found' 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});