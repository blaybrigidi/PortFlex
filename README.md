# PortFlex - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Node.js backend.

## 🌟 Features

### Frontend (React + TypeScript)
- **Modern Design**: Clean, minimal aesthetic with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Sections**:
  - Animated hero section with profile image
  - Skills showcase with hover tooltips
  - Project cards with detailed modals
  - Contact form with validation
- **Tech Stack**: React 18, TypeScript, Framer Motion, Lucide React

### Backend (Node.js + Express)
- **Email API**: Sends notification emails and confirmations
- **Security**: Rate limiting, input validation, CORS protection
- **Email Features**:
  - Professional HTML templates
  - Confirmation emails to senders
  - Notification emails to portfolio owner
- **Tech Stack**: Node.js, Express, Nodemailer, Helmet

## 🚀 Project Structure

```
PortFlex/
├── portfolio-site/          # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── contexts/        # Theme context
│   │   └── ...
│   └── public/
│       ├── PFP10.jpg       # Profile image
│       └── Brigidis_Resume.pdf
└── backend/                 # Node.js API
    ├── server.js           # Main server file
    ├── Dockerfile          # Container config
    ├── fly.toml           # Fly.io config
    └── .env.example       # Environment template
```

## 🛠️ Local Development

### Prerequisites
- Node.js 18+
- npm or yarn
- Gmail account (for email functionality)

### Frontend Setup
```bash
cd portfolio-site
npm install
npm start
```
Runs on: http://localhost:3000

### Backend Setup
1. Set up Gmail App Password:
   - Enable 2FA on Gmail
   - Generate App Password: https://myaccount.google.com/apppasswords

2. Configure environment:
```bash
cd backend
cp .env.example .env
# Edit .env with your email credentials
```

3. Start server:
```bash
npm install
npm start
```
Runs on: http://localhost:3001

## 📧 Email Configuration

The contact form sends emails using Gmail SMTP. Set these environment variables:

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-16-digit-app-password
```

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
cd portfolio-site
npm run build
# Deploy the build/ folder
```

### Backend Options

#### Railway (Recommended)
```bash
cd backend
railway up
railway vars set EMAIL_USER=your-email@gmail.com
railway vars set EMAIL_APP_PASSWORD=your-app-password
```

#### Fly.io
```bash
cd backend
fly launch
fly secrets set EMAIL_USER=your-email@gmail.com
fly secrets set EMAIL_APP_PASSWORD=your-app-password
fly deploy
```

#### Render
- Connect GitHub repo
- Set environment variables in dashboard
- Auto-deploys on push

## 🎨 Customization

### Personal Information
- Update name, bio, and links in `src/components/Header.tsx`
- Replace profile image in `public/`
- Update resume file in `public/`

### Projects
- Edit project data in `src/components/Projects.tsx`
- Add your GitHub URLs and demo links
- Update "Why I Built It" stories

### Skills
- Modify skills array in `src/components/Skills.tsx`
- Update experience descriptions
- Customize categories

### Styling
- Theme colors in `src/index.css` CSS variables
- Component styles are inline for easy customization

## 📱 Mobile Responsive

- Breakpoints: 768px (tablet), 480px (mobile)
- Fluid typography with clamp()
- Touch-friendly interactions
- Optimized animations for mobile

## 🔧 Tech Highlights

- **Performance**: Lazy loading, optimized animations, tree shaking
- **Accessibility**: Semantic HTML, keyboard navigation, ARIA labels
- **SEO**: Meta tags, structured data, semantic markup
- **Security**: Rate limiting, input validation, CORS, Helmet
- **User Experience**: Loading states, error handling, form validation

## 📈 Performance Features

- Lighthouse Score: 90+
- First Contentful Paint: <2s
- Bundle size: <500KB gzipped
- Email delivery: <3s response time

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 🎯 About

This portfolio showcases full-stack development skills with:
- Modern React patterns and TypeScript
- RESTful API design
- Email automation
- Cloud deployment
- Mobile-first responsive design
- Performance optimization

Built with ❤️ by Brigidi Blay