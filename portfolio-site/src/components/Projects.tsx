import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Calendar, Code, Zap } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  whyBuilt: string;
  tech: string[];
  date: string;
  githubUrl?: string;
  demoUrl?: string;
  tags: string[];
  highlights: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'ml-cache',
      title: 'High-Performance ML Caching System',
      description: 'Engineered C++ caching system with advanced vectorization, achieving 6x performance improvement',
      longDescription: 'Built an enterprise-grade C++ caching system that revolutionizes ML inference performance through advanced vectorization and custom memory architecture. The system processes over 2.3M operations per second with automatic crash recovery.',
      whyBuilt: 'While training deep learning models, I noticed that frequently accessed data was being retrieved from disk repeatedly, creating massive bottlenecks. Traditional caching solutions weren\'t optimized for ML workloads, so I built this high-performance system specifically for machine learning inference patterns.',
      tech: ['C++', 'ARM NEON', 'Multithreading'],
      date: 'Jun 2025 – Present',
      githubUrl: 'https://github.com/blaybrigidi/cache',
      tags: [],
      highlights: [
        '6x performance improvement over baseline',
        'Reduced ML inference latency from 180ms to 30ms',
        '180% throughput increase with 65% less memory waste',
        'Supports 16+ concurrent threads with auto-recovery'
      ]
    },
    {
      id: 'ai-handbook',
      title: 'Multi-School AI Handbook Chatbot',
      description: 'Built multi-tenant RAG chatbot platform supporting 100+ users with school-aware AI contexts',
      longDescription: 'Developed a comprehensive RAG-based chatbot platform that serves multiple educational institutions. Features Claude 3.7-based pipeline with 95% PDF parsing accuracy and sub-3-second response times.',
      whyBuilt: 'I noticed many students were unknowingly breaking school policies because handbooks were dense and hard to navigate. This led to unnecessary disciplinary actions and frustrated administrators dealing with repetitive policy questions. I built this AI chatbot to help both students understand policies easily and reduce admin workload.',
      tech: ['FastAPI', 'RAG', 'Snowflake', 'React', 'Claude 3.7'],
      date: 'Feb 2025 – May 2025',
      githubUrl: 'https://github.com/blaybrigidi/Handbook_Assistant',
      demoUrl: 'https://youtu.be/jiFGt-RouaA',
      tags: [],
      highlights: [
        '95% PDF parsing accuracy',
        'Average 2.3s response time',
        'Reduced admin queries by 60%',
        'Multi-tenant architecture for 100+ users'
      ]
    },
    {
      id: 'ecommerce-tracker',
      title: 'E-commerce Order Tracker',
      description: 'Real-time order tracking system using Kafka and Debezium for 70+ fashion deliveries',
      longDescription: 'Developed a comprehensive real-time order tracking system that enables sub-second inventory synchronization across multiple fashion retailers. Built with modern streaming architecture.',
      whyBuilt: 'An Instagram fashion brand posted about struggling with inventory management and order tracking across multiple platforms. They were losing sales due to overselling and customers were frustrated with delayed updates. I reached out and built this real-time tracking system to solve their operational challenges.',
      tech: ['Apache Kafka', 'Debezium', 'WebSockets', 'React', 'PostgreSQL', 'Docker'],
      date: 'Mar 2024 – May 2024',
      githubUrl: 'https://github.com/your-github/order-tracker',
      tags: [],
      highlights: [
        'Sub-second inventory synchronization',
        'Real-time WebSocket updates',
        'Reduced manual coordination by 60%',
        'Accelerated onboarding by 70% with Docker'
      ]
    },
    {
      id: 'audio-platform',
      title: 'Audio Recognition Platform',
      description: 'C++ audio fingerprinting engine for real-time music discovery with PostgreSQL optimization',
      longDescription: 'Co-founded and engineered a cutting-edge audio recognition platform featuring a C++ fingerprinting engine capable of sub-3-second music identification across thousands of features.',
      whyBuilt: 'My friend was aspiring to be a music producer but kept hearing interesting tones and beats in different DAWs that he couldn\'t identify or recreate. He was struggling to find the source tracks or similar sounds. I helped him build this audio recognition platform to solve that problem, and we turned it into a startup to help other producers and music enthusiasts.',
      tech: ['C++', 'PostgreSQL', 'Audio Processing'],
      date: 'Aug 2024 – Present',
      tags: [],
      demoUrl: "https://youtube.com/shorts/8wvVWlr55Fg",
      highlights: [
        'Sub-3s lookup across 3,000+ features',
        'Handles 11,000+ fingerprints per song',
        'Optimized vector search implementation',
        'Real-time music discovery capabilities'
      ]
    }
  ];

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

  const cardVariants = {
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

  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            A showcase of my recent work in systems engineering, AI, and full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="card"
              style={{ cursor: 'pointer', height: 'fit-content' }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 25px 50px var(--shadow)'
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Calendar size={16} color="var(--accent)" />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  {project.date}
                </span>
              </div>

              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                fontFamily: 'JetBrains Mono, monospace'
              }}>
                {project.title}
              </h3>

              <p style={{ 
                fontSize: '1rem', 
                color: 'var(--text-secondary)', 
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                {project.description}
              </p>

              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem', 
                marginBottom: '1.5rem' 
              }}>
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.25rem 0.75rem',
                      background: 'var(--accent)',
                      color: 'white',
                      borderRadius: '1rem',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ 
                display: 'flex', 
                gap: '0.5rem', 
                marginBottom: '1rem' 
              }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      color: 'var(--accent)',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.githubUrl && (
                  <span style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.875rem'
                  }}>
                    <Github size={16} />
                    GitHub
                  </span>
                )}
                {project.demoUrl && (
                  <span style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.875rem'
                  }}>
                    <ExternalLink size={16} />
                    Demo
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.8)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
              }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  maxWidth: '800px',
                  maxHeight: '90vh',
                  overflow: 'auto',
                  position: 'relative',
                  border: '1px solid var(--border)'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '0.5rem'
                  }}
                >
                  <X size={24} />
                </button>

                <h3 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1rem',
                  fontFamily: 'JetBrains Mono, monospace'
                }}>
                  {selectedProject.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <Calendar size={16} color="var(--accent)" />
                  <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
                    {selectedProject.date}
                  </span>
                </div>

                <p style={{ 
                  fontSize: '1.125rem', 
                  color: 'var(--text-secondary)', 
                  marginBottom: '2rem',
                  lineHeight: '1.7'
                }}>
                  {selectedProject.longDescription}
                </p>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    💡 Why I Built It
                  </h4>
                  <p style={{ 
                    fontSize: '1rem', 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.6',
                    fontStyle: 'italic'
                  }}>
                    {selectedProject.whyBuilt}
                  </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Zap size={20} color="var(--accent)" />
                    Key Achievements
                  </h4>
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} style={{ 
                        marginBottom: '0.5rem',
                        color: 'var(--text-secondary)'
                      }}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Code size={20} color="var(--accent)" />
                    Technologies Used
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '0.5rem 1rem',
                          background: 'var(--accent)',
                          color: 'white',
                          borderRadius: '1rem',
                          fontSize: '1rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;