import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border)',
      padding: '2rem 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}>
          Designed & coded with
          <Heart size={16} style={{ color: 'var(--accent)' }} />
          in VS Code 
          <Code size={16} style={{ color: 'var(--accent)' }} />
          (with intention of immediate employment)
        </p>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.875rem',
          marginTop: '0.5rem'
        }}>
          Brigidi Ackah Blay's Portfolio (Please give me a job)
        </p>
      </div>
    </footer>
  );
};

export default Footer;