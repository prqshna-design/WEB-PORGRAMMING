
import { useState } from "react";
import "./App.css";
import ProjectList from "./components/ProjectList";
import FilterBar from "./components/FilterBar";

const projects = [
  {
    id: 1,
    title: "SeoulMate",
    description:
      "A website to explore Seoul, discover shopping destinations, and plan exciting city experiences.",
    tech: ["React", "CSS", "JavaScript"],
    github:
      "https://github.com/prqshna-design/WEB-PORGRAMMING/tree/main/TEAM%20PROJECTS/SeoulMate",
    demo: "https://seoulmate-chi.vercel.app/en/guide",
  },
  {
    id: 2,
    title: "PR Digital Portfolio",
    description:
      "My personal portfolio website, showcasing my creative work, web development skills, and projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/prqshna-design/Portfolio",
    demo: "https://prqshna-design.github.io/Portfolio/",
  },
  {
    id: 3,
    title: "Student Registration System",
    description:
      "A web-based student registration form created with a simple interface and interactive features.",
    tech: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/prqshna-design/WEB-PORGRAMMING/blob/main/WEB%20week8%20%28mon%29/student%20registration.html",
    demo:
      "https://prqshna-design.github.io/WEB-PORGRAMMING/WEB%20week8%20(mon)/student%20registration.html",
  },
];

function App() {
  const [selectedTech, setSelectedTech] = useState("All");

  return (
    <div className="app">
      {/* Navigation */}
      <header className="site-header">
        <a href="#home" className="logo">
          PR<span>.</span>
        </a>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>

        <a href="mailto:prashna@gmail.com" className="header-contact">
          Let's connect ↗
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="status-dot"></span>
              COMPUTER ENGINEERING STUDENT
            </span>

            <h1>
              Creating with
              <br />
              <span>curiosity</span> & code.
            </h1>

            <p className="hero-description">
              Hi, I'm Prashna! I enjoy turning ideas into interactive
              digital experiences and exploring the world of web
              development, one project at a time.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore my work <span>↗</span>
              </a>

              <a href="#about" className="secondary-button">
                About me
              </a>
            </div>

            <div className="hero-note">
              <span>DESIGN</span>
              <span>✳</span>
              <span>DEVELOPMENT</span>
              <span>✳</span>
              <span>CREATIVITY</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative purple portfolio artwork">
            <div className="art-circle circle-one"></div>
            <div className="art-circle circle-two"></div>
            <div className="art-star">✳</div>

            <div className="art-card">
              <span className="art-card-label">A LITTLE BIT ABOUT ME</span>
              <div className="art-initials">P.</div>
              <span className="art-card-bottom">LEARNING · BUILDING · GROWING</span>
            </div>

            <div className="art-sticker">MADE WITH ♡</div>
          </div>
        </section>

        {/* Small Information Strip */}
        <section className="intro-strip">
          <div>
            <strong>03</strong>
            <span>Featured projects</span>
          </div>
          <div>
            <strong>04</strong>
            <span>Core technologies</span>
          </div>
          <div>
            <strong>01</strong>
            <span>Curious mind</span>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section" id="projects">
          <div className="section-heading">
            <div>
              <span className="section-label">01 / MY WORK</span>
              <h2>Selected <span>projects.</span></h2>
              <p>
                A collection of things I've designed, developed,
                and learned along the way.
              </p>
            </div>

            <span className="project-count">PORTFOLIO — 2026</span>
          </div>

          <div className="gallery-toolbar">
            <span>EXPLORE BY TECHNOLOGY</span>
            <FilterBar
              selectedTech={selectedTech}
              setSelectedTech={setSelectedTech}
            />
          </div>

          <ProjectList
            projects={projects}
            selectedTech={selectedTech}
          />
        </section>

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="about-number">02 / A LITTLE ABOUT ME</div>

          <div className="about-content">
            <h2>
              Always learning.
              <br />
              Always <span>creating.</span>
            </h2>

            <p>
              I'm a computer engineering student interested in
              programming, web design, and building useful digital
              experiences. Every project is an opportunity to learn
              something new, experiment with ideas, and improve my skills.
            </p>

            <a
              href="https://github.com/prqshna-design"
              target="_blank"
              rel="noreferrer"
              className="about-link"
            >
              Find me on GitHub ↗
            </a>
          </div>

          <div className="about-decoration">✳</div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <a href="#home" className="footer-logo">
          PR<span>.</span>
        </a>

        <p>Designed & built with curiosity and a little creativity.</p>

        <a href="mailto:prashna@gmail.com" className="footer-email">
          SAY HELLO ↗
        </a>

        <span className="copyright">© 2026 PRASHNA RAI</span>
      </footer>
    </div>
  );
}

export default App;
