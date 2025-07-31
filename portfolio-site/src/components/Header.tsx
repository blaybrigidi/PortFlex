import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const handleContactScroll = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          style={{
            position: 'fixed',
            top: '2rem',
            right: '2rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '50%',
            width: '3rem',
            height: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 1000,
            transition: 'all 0.3s ease'
          }}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
        >
          <motion.div
            variants={itemVariants}
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              margin: '0 auto 2rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              overflow: 'hidden',
              border: '4px solid var(--text-primary)',
              padding: '0'
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: 5,
              boxShadow: '0 20px 40px var(--shadow)'
            }}
          >
            <img 
              src="PFP10.jpg" 
              alt="Profile"
              style={{
                width: '130%',
                height: '130%',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
                transform: 'translate(-20%, -10%)'
              }}
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              lineHeight: '1.1'
            }}
          >
            Brigidi Ackah Blay
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="gradient-text"
            style={{
              fontSize: 'clamp(1.25rem, 4vw, 2rem)',
              fontWeight: '500',
              marginBottom: '1.5rem'
            }}
          >
            Software Engineer | Backend & AI Systems
          </motion.h2>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              marginBottom: '3rem',
              maxWidth: '600px',
              margin: '0 auto 3rem'
            }}
          >
            Building resilient systems, one elegant line of code at a time.
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}
          >
            <a href="/Brigidis_Resume.pdf" className="btn btn-primary" download>
              <Download size={20} />
              Resume
            </a>
            <button onClick={handleContactScroll} className="btn btn-secondary">
              <Mail size={20} />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center'
            }}
          >
            <a
              href="https://github.com/blaybrigidi"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '3rem',
                height: '3rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/brigidi-blay-574906274"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '3rem',
                height: '3rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;