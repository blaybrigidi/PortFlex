import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Wake up the backend when app loads
    const wakeUpBackend = async () => {
      try {
        const apiUrl = process.env.NODE_ENV === 'production' 
          ? 'https://portflex.onrender.com/health'
          : 'http://localhost:3001/health';
        
        // Silent ping to wake up the server
        await fetch(apiUrl, { 
          method: 'GET',
          cache: 'no-cache'
        });
      } catch (error) {
        // Silent fail - backend will wake up eventually
        console.log('Waking up backend...');
      }
    };

    wakeUpBackend();
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
