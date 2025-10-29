EduRead - AI-Powered Document Processing Platform
https://img.shields.io/badge/EduRead-Smart%2520Document%2520Reader-blue
https://img.shields.io/badge/version-1.0.0-green
https://img.shields.io/badge/license-MIT-orange

🌟 Overview
EduRead is an intelligent document processing platform that transforms educational materials into accessible learning experiences using AI. Upload any document and get instant summaries, translations, audio versions, and interactive assistance.

Live Demo: Coming Soon

🚀 Features
🤖 AI-Powered Processing
Smart Summarization - Get concise summaries at different lengths

Text Simplification - Make complex texts easier to understand

Multi-language Translation - Support for African languages and beyond

Interactive Q&A - Ask questions about your documents

📱 User Experience
Document Upload - Support for PDF, DOCX, and TXT files

Audiobook Generation - Convert text to speech

PWA Support - Install as a mobile app

Offline Reading - Access processed documents anywhere

💰 Monetization
Free Trial - 5 free document processing credits

Flexible Subscriptions - Student and Professional plans

MPESA Integration - Seamless mobile payments

Auto-renewal - Hassle-free subscription management

🛠️ Tech Stack
Frontend
Framework: Next.js 14 with App Router

Styling: Tailwind CSS

PWA: Next-PWA for mobile app functionality

State Management: React Hooks

HTTP Client: Axios

Backend
Framework: FastAPI (Python)

Database: MySQL with SQLAlchemy ORM

Task Queue: Celery with Redis

File Storage: Supabase Storage

Authentication: JWT Tokens

AI & Processing
Document Parsing: PyMuPDF, python-docx

Text Processing: NLTK, langdetect

Summarization: Transformers, OpenAI API

Translation: NLLB, Google Translate API

Text-to-Speech: Amazon Polly, Google TTS

Payments
Payment Gateway: MPESA Daraja API

Subscription Management: Custom implementation

Webhooks: Secure callback handling

📦 Installation
Prerequisites
Python 3.8+

Node.js 16+

MySQL 5.7+

Redis

Quick Start
1. Clone Repository
bash
git clone https://github.com/yourusername/eduread.git
cd eduread
2. Backend Setup
bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your credentials

# Create database tables
python -c "from app.models.database import create_tables; create_tables()"

# Start backend server
uvicorn app.main:app --reload
3. Frontend Setup
bash
cd frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your credentials

# Start development server
npm run dev
4. Access the Application
Frontend: http://localhost:3000

Backend API: http://localhost:8000

API Documentation: http://localhost:8000/docs

🗄️ Database Setup
Manual MySQL Setup
sql
CREATE DATABASE eduread CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'eduread_user'@'localhost' IDENTIFIED BY 'eduread_password123';
GRANT ALL PRIVILEGES ON eduread.* TO 'eduread_user'@'localhost';
FLUSH PRIVILEGES;

-- Import schema
mysql -u eduread_user -p eduread < database/schema.sql
🔧 Configuration
Environment Variables
Backend (.env)
env
DATABASE_URL=mysql+pymysql://username:password@localhost:3306/eduread
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_SHORTCODE=your_paybill_number
MPESA_PASSKEY=your_passkey
REDIS_URL=redis://localhost:6379/0
SECRET_KEY=your-secret-key
Frontend (.env.local)
env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
BACKEND_URL=http://localhost:8000
NEXT_PUBLIC_APP_URL=http://localhost:3000
💳 MPESA Integration
Sandbox Testing
Use these test credentials for development:

env
MPESA_SHORTCODE=174379
MPESA_PASSKEY=bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919
Production Setup
Register business with Safaricom Daraja

Obtain production credentials

Configure PayBill number with your bank

Set up SSL certificates

🚀 Deployment
Frontend (Vercel)
Push code to GitHub

Connect repository to Vercel

Configure environment variables

Deploy automatically

Backend (Railway/Render)
Connect GitHub repository

Set environment variables

Deploy with one click

Database (Supabase/PlanetScale)
Use managed database services

Automatic backups and scaling

📱 PWA Features
Installable on mobile and desktop

Offline functionality for reading

Push notifications for processing updates

App-like experience with full-screen mode

🎯 Usage Guide
For Students
Sign up for free trial (5 documents)

Upload educational materials (PDF/DOCX/TXT)

Get instant summaries and simplified versions

Listen to audio versions on the go

Ask questions about the content

Subscribe via MPESA for unlimited access

For Educators
Upload teaching materials

Create multiple versions for different learning levels

Generate audio for auditory learners

Translate content for multilingual classrooms

Track student engagement

💰 Pricing
Plan	Price	Documents	Features
Free Trial	KSh 0	5	Basic processing
Student	KSh 299/month	50	All features + priority support
Professional	KSh 799/month	200	Advanced features + API access
🔒 Security
Data Encryption at rest and in transit

JWT Authentication for API security

MPESA Webhook Verification

File Upload Scanning

Rate Limiting on API endpoints

🐛 Troubleshooting
Common Issues
Database Connection Failed

Check MySQL service is running

Verify credentials in .env file

Ensure database exists

File Upload Fails

Check file size limits (10MB)

Verify supported formats (PDF, DOCX, TXT)

Ensure Supabase storage is configured

MPESA Payments Not Working

Verify sandbox/production credentials

Check callback URL configuration

Ensure phone number format (254...)

🤝 Contributing
We welcome contributions! Please see our Contributing Guide for details.

Fork the repository

Create a feature branch

Make your changes

Add tests

Submit a pull request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🆘 Support
Documentation: GitHub Wiki

Issues: GitHub Issues

Email: support@eduread.com

Community: Discord/Slack Channel

🙏 Acknowledgments
Safaricom for MPESA Daraja API

OpenAI for AI models

Supabase for backend services

Vercel for frontend hosting

<div align="center">
EduRead - Transforming documents into learning experiences

Get Started • View Demo • Report Bug

</div>