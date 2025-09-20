import React, { useState, useEffect } from 'react';

// App.css styles
const styles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar.scrolled .logo {
  color: #333;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.navbar.scrolled .nav-link {
  color: #333;
}

.nav-link:hover {
  color: #fff;
  transform: translateY(-2px);
}

.navbar.scrolled .nav-link:hover {
  color: #667eea;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #fff;
  border-radius: 2px;
}

.navbar.scrolled .nav-link.active::after {
  background: #667eea;
}

.main-content {
  flex: 1;
  margin-top: 80px;
}

.screen {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .container {
    padding: 1rem;
  }
  
  .nav-container {
    padding: 1rem;
  }
}
`;

// Home Component
const Home = () => {
  const homeStyles = `
    .hero {
      text-align: center;
      color: white;
      padding: 4rem 0;
    }

    .hero h1 {
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 900;
      margin-bottom: 1rem;
      background: linear-gradient(45deg, #fff, #e0e7ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: textGlow 2s ease-in-out infinite alternate;
    }

    @keyframes textGlow {
      from { filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)); }
      to { filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.8)); }
    }

    .hero p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-button {
      display: inline-block;
      padding: 1rem 2rem;
      background: linear-gradient(45deg, #ff6b6b, #ee5a24);
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-weight: bold;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(238, 90, 36, 0.4);
    }

    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(238, 90, 36, 0.6);
    }

    .tech-stack {
      margin-top: 4rem;
      text-align: center;
    }

    .tech-stack h3 {
      color: white;
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .tech-item {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 1.5rem;
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .tech-item:hover {
      transform: translateY(-10px) scale(1.05);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .tech-item h4 {
      color: white;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    .tech-item p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;
    }
  `;

  return (
    <>
      <style>{homeStyles}</style>
      <div className="hero">
        <h1>Mcbride Obwoge</h1>
        <p>Full Stack Software Engineer</p>
        <a href="<About />" className="cta-button">
          View My Work
        </a>
        
        <div className="tech-stack">
          <h3>Technologies I Love</h3>
          <div className="tech-grid">
            <div className="tech-item">
              <h4>React</h4>
              <p>Frontend</p>
            </div>
            <div className="tech-item">
              <h4>Node.js</h4>
              <p>Backend</p>
            </div>
            <div className="tech-item">
              <h4>Python</h4>
              <p>AI/ML</p>
            </div>
            <div className="tech-item">
              <h4>Dart/Flutter</h4>
              <p>Mobile dev</p>
            </div>
            <div className="tech-item">
              <h4>Kotlin</h4>
              <p>Mobile dev</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

// About Component
const About = () => {
  const aboutStyles = `
    .about-container {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      padding: 4rem;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      margin: 2rem 0;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 4rem;
      align-items: center;
    }

    .profile-section {
      text-align: center;
    }

    .profile-image {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background: linear-gradient(45deg, #667eea, #764ba2);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 2rem;
      font-size: 4rem;
      color: white;
      font-weight: bold;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .profile-image:hover {
      transform: scale(1.05) rotate(5deg);
      box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
    }

    .content-section h2 {
      font-size: 3rem;
      margin-bottom: 2rem;
      color: #333;
      background: linear-gradient(45deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .content-section p {
      font-size: 1.1rem;
      color: #666;
      margin-bottom: 1.5rem;
      line-height: 1.8;
    }

    .skills-section {
      margin-top: 3rem;
    }

    .skills-section h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: #333;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .skill-bar {
      background: #f0f0f0;
      border-radius: 10px;
      padding: 1rem;
      position: relative;
      overflow: hidden;
    }

    .skill-bar::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: linear-gradient(45deg, #667eea, #764ba2);
      border-radius: 10px;
      transition: width 2s ease;
    }

    .skill-bar.react::before { width: 90%; }
    .skill-bar.node::before { width: 85%; }
    .skill-bar.python::before { width: 80%; }
    .skill-bar.aws::before { width: 75%; }

    .skill-content {
      position: relative;
      z-index: 2;
      color: white;
      font-weight: bold;
      mix-blend-mode: difference;
    }

    @media (max-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .about-container {
        padding: 2rem;
        margin: 1rem 0;
      }
      
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-bar');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(entry.target.dataset.skill);
        }
      });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{aboutStyles}</style>
      <div className="about-container">
        <div className="about-grid">
          <div className="profile-section">
            <div className="profile-image">MO</div>
          </div>
          <div className="content-section">
            <h2>About Me</h2>
            <p>
              I'm a passionate full-stack software engineer with  experience 
              building scalable  applications and solving complex technical challenges.
            </p>
            <p>
              My journey in software development started with a curiosity about how things work 
              under the hood, and has evolved into a deep love for creating elegant solutions 
              that make a real impact.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open source projects, 
              or exploring the latest in AI and machine learning.
            </p>
          </div>
        </div>
        
        <div className="skills-section">
          <h3>Core Skills</h3>
          <div className="skills-grid">
            <div className="skill-bar" data-skill="react">
              <div className="skill-content">React & Frontend</div>
            </div>
            <div className="skill-bar" data-skill="node">
              <div className="skill-content">Node.js & Backend</div>
            </div>
            <div className="skill-bar" data-skill="python">
              <div className="skill-content">Python & AI/ML</div>
            </div>
            <div className="skill-bar" data-skill="aws">
              <div className="skill-content">Flutter/Kotlin & Mobile dev</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Projects Component
const Projects = () => {
  const projectsStyles = `
    .projects-header {
      text-align: center;
      color: white;
      margin-bottom: 4rem;
    }

    .projects-header h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      background: linear-gradient(45deg, #fff, #e0e7ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }

    .project-image {
      height: 200px;
      background: linear-gradient(45deg, #667eea, #764ba2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 3rem;
      font-weight: bold;
      position: relative;
      overflow: hidden;
    }

    .project-image::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      transform: rotate(45deg);
      animation: shimmer 3s infinite;
    }

    @keyframes shimmer {
      0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
      100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
    }

    .project-content {
      padding: 2rem;
    }

    .project-content h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #333;
    }

    .project-content p {
      color: #666;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .tech-tag {
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .project-links {
      display: flex;
      gap: 1rem;
    }

    .project-link {
      padding: 0.8rem 1.5rem;
      border-radius: 25px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .project-link.primary {
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
    }

    .project-link.secondary {
      border: 2px solid #667eea;
      color: #667eea;
      background: transparent;
    }

    .project-link:hover {
      transform: translateY(-2px);
    }

    .project-link.primary:hover {
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }

    .project-link.secondary:hover {
      background: #667eea;
      color: white;
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .project-content {
        padding: 1.5rem;
      }
      
      .project-links {
        flex-direction: column;
      }
    }
  `;

  const projects = [
    {
      id: 1,
      title: "QR code genertor",
      description: "Built a web application that generates qr codes for each word inputted into the application.",
      tech: ["Html", "Css", "Javascript", ],
      icon: "🛒"
    },
    {
      id: 2,
      title: "Maize Chatbot",
      description: "ML model that querries data based on pdfs fed to it to guide farmers on planting techniques and crop management.",
      tech: ["React", "Python", "TensorFlow", "MongoDB"],
      icon: "🤖"
    },
    {
      id: 3,
      title: "Real-time Chat App",
      description: "Scalable chat application with WebSocket connections, file sharing, and end-to-end encryption.",
      tech: ["React", "Socket.io", "Redis", "AWS"],
      icon: "💬"
    }
  ];

  return (
    <>
      <style>{projectsStyles}</style>
      <div className="projects-header">
        <h2>Featured Projects</h2>
        <p>Here are some of my recent works that showcase my skills and passion</p>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              {project.icon}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href="#" className="project-link primary">Live Demo</a>
                <a href="#" className="project-link secondary">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactStyles = `
    .contact-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .contact-info {
      color: white;
    }

    .contact-info h2 {
      font-size: 3rem;
      margin-bottom: 2rem;
      background: linear-gradient(45deg, #fff, #e0e7ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .contact-info p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      line-height: 1.6;
    }

    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .contact-method {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .contact-method:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateX(10px);
    }

    .contact-method .icon {
      font-size: 1.5rem;
    }

    .contact-method .details h4 {
      margin-bottom: 0.5rem;
    }

    .contact-method .details p {
      margin: 0;
      opacity: 0.8;
      font-size: 1rem;
    }

    .contact-form {
      background: rgba(255, 255, 255, 0.95);
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
    }

    .contact-form h3 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: #333;
      text-align: center;
    }

    .form-group {
      margin-bottom: 2rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 600;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 1rem;
      border: 2px solid #e0e0e0;
      border-radius: 10px;
      font-size: 1rem;
      transition: all 0.3s ease;
      font-family: inherit;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 10px rgba(102, 126, 234, 0.2);
    }

    .form-group textarea {
      height: 120px;
      resize: vertical;
    }

    .submit-button {
      width: 100%;
      padding: 1rem 2rem;
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .submit-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
    }

    .submit-button:active {
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      .contact-container {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .contact-form {
        padding: 2rem;
      }
      
      .contact-info h2 {
        font-size: 2rem;
      }
    }
  `;

  const handleSubmit = () => {
    // Handle form submission
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <style>{contactStyles}</style>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="icon">📧</div>
              <div className="details">
                <h4>Email</h4>
                <p>obwogemcbride73@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="icon">💼</div>
              <div className="details">
                <h4>LinkedIn</h4>
                <p>https://www.linkedin.com/in/mcbride-obwoge</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="icon">🐙</div>
              <div className="details">
                <h4>GitHub</h4>
                <p>https://github.com/Blacspot</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="icon">📍</div>
              <div className="details">
                <h4>Location</h4>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Send Message</h3>
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hello..."
                required
              ></textarea>
            </div>
            
            <button onClick={handleSubmit} className="submit-button">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Main App Component
const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const screens = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    contact: <Contact />
  };

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <a href="#" className="logo" onClick={() => setCurrentScreen('home')}>
              Blacspot
            </a>
            <ul className="nav-links">
              <li>
                <span
                  className={`nav-link ${currentScreen === 'home' ? 'active' : ''}`}
                  onClick={() => setCurrentScreen('home')}
                >
                  Home
                </span>
              </li>
              <li>
                <span
                  className={`nav-link ${currentScreen === 'about' ? 'active' : ''}`}
                  onClick={() => setCurrentScreen('about')}
                >
                  About
                </span>
              </li>
              <li>
                <span
                  className={`nav-link ${currentScreen === 'projects' ? 'active' : ''}`}
                  onClick={() => setCurrentScreen('projects')}
                >
                  Projects
                </span>
              </li>
              <li>
                <span
                  className={`nav-link ${currentScreen === 'contact' ? 'active' : ''}`}
                  onClick={() => setCurrentScreen('contact')}
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <div className="screen" key={currentScreen}>
            <div className="container">
              {screens[currentScreen]}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;