import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const team = [
    { 
      name: "Sheena", 
      role: "Creative Architect", 
      desc: "Turns abstract ideas into inspiring designs.", 
      experience: "3+ Years Experience",
      skills: ["UI/UX", "Brand Design", "Data Analytics", "Team Planning"],
      linkedin: "https://www.linkedin.com/in/sheena-profile"
    },
    { 
      name: "Kent", 
      role: "Strategy Maven", 
      desc: "Builds seamless and scalable digital products.", 
      experience: "5+ Years Experience",
      skills: ["Growth", "Vision", "Analysis", "Sales"],
      linkedin: "https://www.linkedin.com/in/kent-profile"
    },
    { 
      name: "Wren", 
      role: "Code Craftsman", 
      desc: "Transforms strategy into real business execution.", 
      experience: "3+ Years Experience",
      skills: ["Fullstack", "Architecture", "Performance"],
      linkedin: "https://www.linkedin.com/in/wren-profile"
    },
  ];

  const projects = [
    { title: "Project Velocity", category: "SaaS Platform", desc: "Collaboration tool for productive meetings.", tags: ["React", "Node.js", "Real-time"] },
    { title: "Brand Nexus", category: "Brand Identity", desc: "Fintech startup rebrand from invisible to iconic.", tags: ["Branding", "UI/UX", "Strategy"] },
    { title: "Growth Engine", category: "Analytics Dashboard", desc: "Data insights that drive smarter decisions.", tags: ["Analytics", "Dashboard", "AI"] },
  ];

  const blogs = [
    { title: "Designing for Humans", date: "Sept 2025", excerpt: "How empathy shapes the future of digital design.", link: "#" },
    { title: "Scaling Startups with Code", date: "Aug 2025", excerpt: "Lessons learned building SaaS platforms.", link: "#" },
    { title: "The Future of Brand Strategy", date: "July 2025", excerpt: "Why brand identity matters more than ever.", link: "#" },
  ];

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <h1 className="logo">SKW</h1>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#work">Work</a>
            <a href="#blogs">Blogs</a>
            <a href="#contact">Contact</a>
            <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Hero */}
      {/* Hero */}
      {/* Hero */}
  <section id="home" className="hero">
  <div className="hero-row">
    <div className="hero-content">
      <h1>
        <span className="gradient">We Build</span> <br /> The Extraordinary
      </h1>
      <p>
        A trio of creators combining <b>design</b>, <b>code</b>, and <b>strategy</b> into innovation.
      </p>
      <div className="buttons">
        <a href="#work" className="btn-primary">See Our Work →</a>
        <a href="#team" className="btn-outline">Meet The Team</a>
      </div>
    </div>

    {/* Hero Image with Blob Effect */}
    <div className="hero-image">
      <div className="blob-container">
        <img 
          src="https://ponly.cachefly.net/wp-content/uploads/Famous-Trios-02.jpg"
          alt="Creative Team"
        />
      </div>
    </div>
  </div>
</section>





      {/* Professional Background / About with Background Image */}
      <section 
        id="about" 
        className="about section" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')", 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          color: "#fff"
        }}
      >
        <div className="overlay">
          <h2>Who <span className="gradient">We Are</span></h2>
          <p>
            At <b>SKW Collective</b>, we’re more than just a creative studio—we’re a
            synergy of vision, design, and technology. Founded by a team of dreamers
            and doers, our mission is to craft digital experiences that don’t just
            look stunning but also deliver real business impact.
          </p>
          <p>
            From reimagining brands to building scalable platforms, we help businesses
            turn ideas into measurable results. Our strength lies in blending creativity
            with strategy and technology to create work that inspires, connects, and grows.
          </p>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="team section">
        <h2>Meet the <span className="gradient">Team</span></h2>
        <div className="grid">
          {team.map((m, i) => (
            <div key={i} className="card">
              <h3>{m.name}</h3>
              <p className="role">{m.role}</p>
              <p className="experience">{m.experience}</p>
              <p>{m.desc}</p>
              <ul>
                {m.skills.map((s, j) => <li key={j}>{s}</li>)}
              </ul>
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">🔗 LinkedIn</a>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="projects section">
        <h2>Our <span className="gradient">Work</span></h2>
        <div className="grid">
          {projects.map((p, i) => (
            <div key={i} className="card project">
              <h3>{p.title}</h3>
              <p className="category">{p.category}</p>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t, j) => <span key={j}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section id="blogs" className="blogs section">
        <h2>Our <span className="gradient">Insights</span></h2>
        <div className="grid">
          {blogs.map((b, i) => (
            <div key={i} className="card blog">
              <h3>{b.title}</h3>
              <p className="date">{b.date}</p>
              <p>{b.excerpt}</p>
              <a href={b.link} className="btn-secondary">Read More →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Let’s Build Something Great</h2>
        <p>Ready to bring your ideas to life? Reach out and let’s collaborate.</p>
        <a href="mailto:hello@skw.com" className="btn-light">Contact Us</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} SKW Collective. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
