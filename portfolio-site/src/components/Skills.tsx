import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  experience: string;
  category: 'Languages' | 'Frameworks' | 'Tools';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'C++', experience: '3 years · Audio processing systems', category: 'Languages' },
    { name: 'Python', experience: '4 years · AI/ML & Backend development', category: 'Languages' },
    { name: 'Java', experience: '2 years · Enterprise applications', category: 'Languages' },
    { name: 'JavaScript', experience: '3 years · Full-stack development', category: 'Languages' },
    { name: 'TypeScript', experience: '2 years · Type-safe applications', category: 'Languages' },
    { name: 'Go', experience: '1 year · Microservices & APIs', category: 'Languages' },
    { name: 'SQL', experience: '3 years · Database design & optimization', category: 'Languages' },
    
    { name: 'React', experience: '3 years · Modern web applications', category: 'Frameworks' },
    { name: 'FastAPI', experience: '2 years · High-performance APIs', category: 'Frameworks' },
    { name: 'Node.js', experience: '3 years · Backend services', category: 'Frameworks' },
    { name: 'Spring Boot', experience: '2 years · Enterprise Java apps', category: 'Frameworks' },
    { name: 'Next.js', experience: '1 year · Full-stack React apps', category: 'Frameworks' },
    { name: 'PyTorch', experience: '2 years · Deep learning models', category: 'Frameworks' },
    { name: 'TensorFlow', experience: '1 year · ML model deployment', category: 'Frameworks' },
    
    { name: 'Docker', experience: '2 years · Containerization', category: 'Tools' },
    { name: 'Apache Kafka', experience: '1 year · Real-time data streaming', category: 'Tools' },
    { name: 'PostgreSQL', experience: '3 years · Relational databases', category: 'Tools' },
    { name: 'MySQL', experience: '2 years · Database optimization', category: 'Tools' },
    { name: 'Snowflake', experience: '1 year · Cloud data warehouse', category: 'Tools' },
    { name: 'GCP', experience: '2 years · Cloud infrastructure', category: 'Tools' },
    { name: 'Git', experience: '4 years · Version control', category: 'Tools' }
  ];

  const categories = ['Languages', 'Frameworks', 'Tools'] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Technologies I work with to build scalable, efficient solutions
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              style={{ marginBottom: '3rem' }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '1.5rem',
                color: 'var(--accent)'
              }}>
                {category}
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '1rem'
                }}
              >
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="skill-bubble"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '0.75rem',
                      padding: '1rem 1.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    whileHover={{
                      scale: 1.02,
                      borderColor: 'var(--accent)',
                    }}
                    onMouseEnter={(e) => {
                      const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLElement;
                      if (tooltip) {
                        tooltip.style.opacity = '1';
                        tooltip.style.transform = 'translateY(0)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLElement;
                      if (tooltip) {
                        tooltip.style.opacity = '0';
                        tooltip.style.transform = 'translateY(10px)';
                      }
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center' 
                    }}>
                      <span style={{ 
                        fontWeight: '600', 
                        fontSize: '1rem',
                        fontFamily: 'JetBrains Mono, monospace'
                      }}>
                        {skill.name}
                      </span>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        opacity: 0.7
                      }} />
                    </div>
                    
                    <div
                      className="tooltip"
                      style={{
                        position: 'absolute',
                        bottom: '-60px',
                        left: '50%',
                        transform: 'translateX(-50%) translateY(10px)',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border)',
                        borderRadius: '0.5rem',
                        padding: '0.5rem 1rem',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        whiteSpace: 'nowrap',
                        opacity: 0,
                        transition: 'all 0.3s ease',
                        zIndex: 10,
                        boxShadow: '0 10px 25px var(--shadow)',
                        pointerEvents: 'none'
                      }}
                    >
                      {skill.experience}
                      <div style={{
                        position: 'absolute',
                        top: '-5px',
                        left: '50%',
                        width: '10px',
                        height: '10px',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border)',
                        borderRight: 'none',
                        borderBottom: 'none',
                        transform: 'translateX(-50%) rotate(45deg)'
                      }} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;